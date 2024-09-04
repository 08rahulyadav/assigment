import { useState } from 'react';
import axios from 'axios';

function CommentForm({ onComment }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/comments', { text }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      onComment();
      setText('');
    } catch (error) {
      console.error('Comment failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <textarea
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Post Comment</button>
    </form>
  );
}

export default CommentForm;
