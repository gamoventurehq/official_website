"""Render the product edit from native 2x POS captures.

Run after npm run build. Requires Pillow, numpy, imageio-ffmpeg, fonttools, brotli.
"""

from io import BytesIO
from pathlib import Path
import subprocess
import tempfile
import wave

import imageio_ffmpeg
import numpy as np
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
CAPTURES = ROOT / "public/images/egg-express/showcase"
FPS, DURATION = 30, 18
INK, PAPER, ORANGE = "#101110", "#f3f0e8", "#ff9666"


def brand_font(size):
    for path in (ROOT / ".next/static/media").glob("*.woff2"):
        font = TTFont(path)
        family = font["name"].getDebugName(1) or ""
        if "Outfit" in family and ord("B") in font.getBestCmap():
            font.flavor = None
            stream = BytesIO()
            font.save(stream)
            stream.seek(0)
            result = ImageFont.truetype(stream, size)
            result.set_variation_by_axes([400])
            return result
    raise RuntimeError("Outfit is missing: run npm run build before rendering.")


SCREENS = {name: Image.open(CAPTURES / f"{name}.png").convert("RGB")
           for name in ("tables", "menu", "item", "order", "category")}
TITLES = ["Built for\nthe counter.", "Choose\na table.", "Find the\nright dish.",
          "Build the\norder.", "Review.\nReady.", "Built for\nthe counter."]
DETAILS = ["Egg Express POS", "Dine in. Counter. Takeaway.", "Photo menu & category filtering",
           "Items, quantities & running totals", "A clear view before opening", "Designed & built by Gamoventure"]


def screen_at(index, local):
    if index in (0, 5):
        return SCREENS["menu"], None
    if index == 1:
        return SCREENS["tables"], (220, 115, 1280, 778)
    if index == 2:
        return SCREENS["menu" if local < 1.5 else "category"], (220, 215, 925, 656)
    if index == 3:
        key = "menu" if local < .65 else "item" if local < 1.4 else "order"
        return SCREENS[key], (400, 115, 1280, 665)
    return SCREENS["order"], (915, 125, 1280, 800)


def rounded_image(image, size, radius):
    result = ImageOps.fit(image, size, method=Image.Resampling.LANCZOS)
    mask = Image.new("L", size)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0]-1, size[1]-1), radius, fill=255)
    result.putalpha(mask)
    return result


def make_scene(index, local, mobile, fonts):
    width, height = (1080, 1080) if mobile else (1920, 1080)
    frame = Image.new("RGB", (width, height), INK)
    draw = ImageDraw.Draw(frame)
    title, detail, label = fonts
    if mobile:
        draw.text((54, 48), TITLES[index].replace("\n", " "), font=title, fill=PAPER)
        draw.text((56, 133), DETAILS[index], font=detail, fill=ORANGE)
        stage = (40, 230, 1040, 950)
    else:
        draw.multiline_text((70, 300), TITLES[index], font=title, spacing=2, fill=PAPER)
        draw.text((74, 525), DETAILS[index], font=detail, fill=ORANGE)
        stage = (600, 120, 1870, 960)
    draw.line((56, 1002, width-56, 1002), fill="#353631", width=1)
    draw.text((56, 1023), "Gamoventure", font=label, fill=PAPER)
    draw.text((width-270, 1023), "Egg Express POS", font=label, fill=ORANGE)

    screen, crop = screen_at(index, local)
    if crop:
        screen = screen.crop(tuple(value*2 for value in crop))
    sx, sy, ex, ey = stage
    available_w, available_h = ex-sx, ey-sy
    # Front-on bookends preserve the tablet proportions; close-ups expose the workflow.
    scale = min((available_w-36)/screen.width, (available_h-36)/screen.height)
    entrance = 1 - 2 ** (-10 * min(local / .55, 1))
    scale *= .975 + .025 * entrance
    sw, sh = round(screen.width*scale), round(screen.height*scale)
    x, y = sx+(available_w-sw)//2, sy+(available_h-sh)//2
    shadow = Image.new("RGBA", frame.size)
    ImageDraw.Draw(shadow).rounded_rectangle((x-12, y+18, x+sw+12, y+sh+32), 32, fill=(0, 0, 0, 140))
    frame = frame.convert("RGBA")
    frame.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(18)))
    draw = ImageDraw.Draw(frame)
    if not crop:
        draw.rounded_rectangle((x-21, y-21, x+sw+21, y+sh+21), 36, fill="#373938", outline="#777b78", width=2)
        draw.rounded_rectangle((x-17, y-17, x+sw+17, y+sh+17), 33, fill="#080909")
        draw.ellipse((x-13, y+sh//2-3, x-7, y+sh//2+3), fill="#303634")
    frame.alpha_composite(rounded_image(screen, (sw, sh), 18 if not crop else 12), (x, y))
    return frame.convert("RGB")


def make_audio(path):
    rate = 44100
    t = np.arange(DURATION*rate)/rate
    track = np.zeros_like(t)
    # Original 120 BPM pulse, with short envelopes to support the cuts.
    for beat in np.arange(0, DURATION, .5):
        dt = np.maximum(t-beat, 0)
        track += .15*np.sin(2*np.pi*(55*dt + 4*(1-np.exp(-dt*25))))*np.exp(-dt*13)*(t>=beat)
        frequency = [220, 329.6276, 440, 293.6648][int(beat*2)%4]
        track += .045*np.sin(2*np.pi*frequency*dt)*np.exp(-dt*7)*(t>=beat)
    track *= np.minimum(np.minimum(t/.03, (DURATION-t)/.1), 1)
    pcm = (track*32767).astype("<i2")
    with wave.open(str(path), "wb") as audio:
        audio.setnchannels(2)
        audio.setsampwidth(2)
        audio.setframerate(rate)
        audio.writeframes(np.column_stack((pcm, pcm)).tobytes())


def render(mobile, audio_path):
    width, height = (1080, 1080) if mobile else (1920, 1080)
    suffix = "-mobile" if mobile else ""
    output = ROOT / f"public/videos/egg-express-pos-showcase{suffix}.mp4"
    poster = ROOT / f"public/images/egg-express/pos-showcase-poster{suffix}.jpg"
    fonts = (brand_font(64 if mobile else 92), brand_font(25), brand_font(24))
    make_scene(0, 1, mobile, fonts).save(poster, quality=96, subsampling=0)
    command = [imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-loglevel", "error",
               "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{width}x{height}",
               "-r", str(FPS), "-i", "-", "-i", str(audio_path), "-c:v", "libx264",
               "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac",
               "-b:a", "160k", "-movflags", "+faststart", "-shortest", str(output)]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    settled_frames = {}
    try:
        for number in range(FPS*DURATION):
            t = number/FPS
            index, local = int(t//3), t%3
            key = (index, local >= .65, local >= 1.4, local >= 1.5)
            if local < .55:
                frame = make_scene(index, local, mobile, fonts)
            else:
                if key not in settled_frames:
                    settled_frames[key] = make_scene(index, local, mobile, fonts)
                frame = settled_frames[key].copy()
            ImageDraw.Draw(frame).line((56, 1002, 56+int((width-112)*t/DURATION), 1002), fill=ORANGE, width=3)
            process.stdin.write(frame.tobytes())
            if number % (FPS*3) == 0:
                print(f"{'Mobile' if mobile else 'Desktop'}: {t:.0f}/{DURATION}s", flush=True)
    finally:
        process.stdin.close()
    if process.wait() != 0:
        raise RuntimeError(f"Encoding failed: {output}")


if __name__ == "__main__":
    with tempfile.TemporaryDirectory(prefix="gamoventure-film-") as temporary:
        audio_path = Path(temporary)/"score.wav"
        make_audio(audio_path)
        render(False, audio_path)
        render(True, audio_path)
