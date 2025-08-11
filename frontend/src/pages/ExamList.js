import React from 'react';
import { Link } from 'react-router-dom';

export default function ExamList() {
  const exams = [
    { id: 1, title: 'Math Test', duration: 30 },
    { id: 2, title: 'Science Test', duration: 45 }
  ];

  return (
    <div>
      <h2>Available Exams</h2>
      <ul>
        {exams.map(exam => (
          <li key={exam.id}>
            {exam.title} - {exam.duration} mins
            <Link to={`/exam/${exam.id}`} style={{ marginLeft: '10px' }}>Start</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
