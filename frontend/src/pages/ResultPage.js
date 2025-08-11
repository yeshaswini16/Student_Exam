import React from 'react';

export default function ResultPage({ result }) {
  return (
    <div>
      <h2>Exam Result</h2>
      {result ? (
        <p>Your Score: {result.score}</p>
      ) : (
        <p>No result available.</p>
      )}
    </div>
  );
}
