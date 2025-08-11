import React, { useEffect, useState } from 'react';

export default function CountdownTimer({ minutes, onTimeUp }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (secondsLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, onTimeUp]);

  return (
    <div>
      Time Left: {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, '0')}
    </div>
  );
}
