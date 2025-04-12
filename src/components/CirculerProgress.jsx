import React, { useEffect, useState } from "react";

const CircularProgress = ({ value, nameofSkill }) => {
  const [progress, setProgress] = useState(0);
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset =
    circleCircumference - (progress / 100) * circleCircumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === value) {
          clearInterval(interval);
          return value;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, value);
      });
    }, 100);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <svg
        className="transform -rotate-90 w-32 h-32"
        width="90"
        height="90"
        viewBox="0 0 120 120"
      >
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={circleRadius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-blue-500 transition-all duration-500 ease-out"
          strokeWidth="10"
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={circleRadius}
          cx="60"
          cy="60"
        />
      </svg>
      <div className="absolute text-xl font-semibold text-blue-500 grid place-items-center">
        <small className="block " style={{ fontSize: "10px", padding: "10px" }}>
          {nameofSkill}
        </small>
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default CircularProgress;
