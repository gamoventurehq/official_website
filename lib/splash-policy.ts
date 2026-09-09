export function claimAutomaticSplash(storage: Pick<Storage, "getItem" | "setItem">, reducedMotion: boolean): boolean {
  try {
    const seen = storage.getItem("gamoventure:splash-seen");
    storage.setItem("gamoventure:splash-seen", "true");
    return !seen && !reducedMotion;
  } catch {
    return false;
  }
}
