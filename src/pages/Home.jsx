import AllPosts from '../components/Post/AllPosts';

const Home = ({ posts }) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export default Home;
