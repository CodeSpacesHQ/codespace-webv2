import React, { useState, useEffect } from "react";

interface CountingAnimationProps {
  value: number;
  duration?: number;
  step?: number;
  onCountChange?: (count: number) => void;
}

const CountingAnimation: React.FC<CountingAnimationProps> = ({
  value,
  duration = 4000, // Animation duration in milliseconds
  step = 16, // Interval between frames in milliseconds
  onCountChange,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let requestId: number;

    const stepAnimation = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = timestamp - startTimestamp;
      const increment = Math.floor((value * progress) / duration);

      if (increment >= value) {
        setCount(value);
        if (onCountChange) {
          onCountChange(value);
        }
      } else {
        setCount(increment);
        requestId = requestAnimationFrame(stepAnimation);
        if (onCountChange) {
          onCountChange(increment);
        }
      }
    };

    requestId = requestAnimationFrame(stepAnimation);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [value, duration, step, onCountChange]);

  useEffect(() => {
    setCount(0); // Reset count to 0 whenever the value changes
  }, [value]);

  return (
    <p className="text-primary font-semibold text-5xl md:text-6xl md:leading-[72px]">
      {count}
      {value === 1000 && "+"}
    </p>
  );
};

export default CountingAnimation;
