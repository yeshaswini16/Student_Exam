import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import ExamList from './pages/ExamList';
import ExamPage from './pages/ExamPage';
import ResultPage from './pages/ResultPage';

export default function App() {
  const [user, setUser] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (student) => {
    setUser(student);
    navigate('/exams');
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/exams" element={<ExamList />} />
      <Route path="/exam/:id" element={<ExamPage onFinish={setResult} />} />
      <Route path="/result" element={<ResultPage result={result} />} />
    </Routes>
  );
}
