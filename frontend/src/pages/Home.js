import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default Home;
