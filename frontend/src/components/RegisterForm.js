import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://192.168.43.114:3000/api/auth/register', { email, password });
      setSuccess('Registration successful');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Registration failed: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Register</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
