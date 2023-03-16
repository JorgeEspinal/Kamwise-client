import PostTable from './PostTable';
import SearchPost from './SearchPost';

const AllPosts = ({ posts }) => {
  return (
    <>
      <SearchPost />
      <PostTable posts={posts} />
    </>
  );
};

export default AllPosts;
