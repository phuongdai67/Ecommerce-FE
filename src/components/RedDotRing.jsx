import "./RedDotRing.css";

const RedDotRing = ({ size = 213 }) => {
  const radius = size / 2 - 1.5;
  const centerX = size / 2;
  const centerY = size / 2;

  const circumference = 2 * Math.PI * radius;
  const dashLength = circumference * 0.83;
  const gapLength = circumference * 0.17;

  const offset = -(circumference * 0.25);

  // Vì transform scale(1,-1) lật trục Y nên tính endAngle theo trục đã lật
  // Bắt đầu 12 giờ, đi ngược chiều 80% → kết thúc ở 10 giờ
  // Sau khi lật trục Y: endAngle = -Math.PI/2 + (2/12 * 2 * Math.PI)
  const endAngle = -Math.PI / 2 + (4 / 12) * 2 * Math.PI;
  const endX = centerX + radius * Math.cos(endAngle);
  const endY = size - (centerY + radius * Math.sin(endAngle)); // bù lại lật trục Y

  return (
    <div className="red-dot-ring" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#e53935"
          strokeWidth="2.5"
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeDashoffset={offset}
          transform={`scale(1,-1) translate(0,-${size})`}
          strokeLinecap="butt"
        />
        <circle cx={endX} cy={endY} r={6} fill="#e53935" />
      </svg>
    </div>
  );
};

export default RedDotRing;
