import { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('/api/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Failed to fetch comments', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Comments</h2>
      {comments.map(comment => (
        <div key={comment._id} className="mb-4 p-2 border border-gray-300 rounded">
          <p>{comment.text}</p>
          <div className="mt-2">
            {comment.replies.map(reply => (
              <div key={reply._id} className="p-2 border-t border-gray-300">
                <p>{reply.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
