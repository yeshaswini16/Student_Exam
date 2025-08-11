import React from 'react';

export default function Question({ question }) {
  return (
    <div>
      <p>{question.text}</p>
      {question.type === 'mcq' && question.options.map((opt, idx) => (
        <label key={idx}>
          <input type="radio" name={question.id} value={opt} /> {opt}
        </label>
      ))}
      {question.type === 'short' && <textarea></textarea>}
    </div>
  );
}
