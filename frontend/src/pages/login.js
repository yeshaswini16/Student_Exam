import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password) {
      onLogin({ name: 'John Doe', email });
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
