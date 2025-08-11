import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import Question from '../components/Question';

export default function ExamPage({ onFinish }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions([
      { id: 1, type: 'mcq', text: '2+2=?', options: ['3', '4', '5'] },
      { id: 2, type: 'short', text: 'Explain gravity in one line.' }
    ]);
  }, [id]);

  const handleTimeUp = () => {
    onFinish({ score: 80 });
    navigate('/result');
  };

  return (
    <div>
      <h2>Exam #{id}</h2>
      <CountdownTimer minutes={1} onTimeUp={handleTimeUp} />
      {questions.map(q => <Question key={q.id} question={q} />)}
    </div>
  );
}
