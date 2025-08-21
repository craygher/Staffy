import React from "react";

interface CircularStepperProps {
  percentage: number;
}

const RADIUS = 50;
const STROKE = 8;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const CircularStepper: React.FC<CircularStepperProps> = ({ percentage }) => {
  const progress = (percentage / 100) * CIRCUMFERENCE;

  return (
    <div style={{ width: 140, height: 140, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={120} height={120}>
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          stroke="#B39DFF"
          strokeWidth={STROKE}
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          stroke="#7646EA"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE - progress}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s" }}
        />
        <circle
          cx="60"
          cy="60"
          r="38"
          fill="#7646EA"
        />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fontSize="28"
          fill="#fff"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};
