function Star({ fill }) {
  // fill: 0, 0.5, or 1
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
      <defs>
        <linearGradient id={`star-${fill}-${Math.random()}`}>
          <stop offset={`${fill * 100}%`} stopColor="#D4A017" />
          <stop offset={`${fill * 100}%`} stopColor="#DDD8C9" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.47 5.27 5.53.68-4.1 3.86 1.13 5.6L10 14.98l-4.03 2.03 1.13-5.6-4.1-3.86 5.53-.68L10 1.5z"
        fill={fill >= 1 ? "#D4A017" : fill > 0 ? `url(#star-${fill})` : "#DDD8C9"}
      />
    </svg>
  );
}

export default function RatingStars({ rating = 0, reviews, size = "sm" }) {
  const stars = [0, 1, 2, 3, 4].map((i) => {
    const diff = rating - i;
    if (diff >= 1) return 1;
    if (diff > 0) return 0.5;
    return 0;
  });

  return (
    <div className={`flex items-center gap-1 ${size === "lg" ? "scale-110 origin-left" : ""}`}>
      <div className="flex items-center gap-0.5">
        {stars.map((fill, i) => (
          <Star key={i} fill={fill} />
        ))}
      </div>
      <span className="text-xs text-ink/60">
        {rating.toFixed(1)}
        {reviews != null && ` (${reviews})`}
      </span>
    </div>
  );
}
