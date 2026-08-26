type FloatingPathsBackgroundProps = {
  variant?: "hero" | "page";
};

const pathIndexes = Array.from({ length: 24 }, (_, index) => index);

function createPath(index: number) {
  const startY = 42 + index * 21;
  const firstControlY = -110 + index * 13;
  const secondControlY = 590 - index * 7;
  const endY = 120 + index * 14;
  return `M-180 ${startY} C170 ${firstControlY} 650 ${secondControlY} 1380 ${endY}`;
}

export function FloatingPathsBackground({ variant = "page" }: FloatingPathsBackgroundProps) {
  return (
    <div className={`floating-paths floating-paths-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {pathIndexes.map((index) => (
          <path
            d={createPath(index)}
            key={index}
            pathLength="1"
            stroke="currentColor"
            strokeDasharray={`${0.56 + (index % 4) * 0.06} ${0.44 - (index % 4) * 0.06}`}
            strokeDashoffset={-(index % 6) * 0.09}
            strokeOpacity={0.22 + index * 0.016}
            strokeWidth={0.68 + index * 0.028}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  );
}
