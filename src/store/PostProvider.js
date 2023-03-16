import { useReducer } from 'react';
import PostContext from './post-context';

const defaultPostState = {
  posts: [],
  loading: false,
  search: null,
};

const findIndexById = (posts, idToFind) =>
  posts.findIndex(post => post._id === idToFind);

const postReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedPosts = state.posts.concat(action.post);

    return { post: updatedPosts, loading: state.loading, search: state.search };
  }

  if (action.type === 'UPDATE') {
    const existingPostIndex = findIndexById(state.posts, action.id);
    const existingPost = state.posts[existingPostIndex];
    let updatedPosts;

    const updatedItem = {
      ...existingPost,
      title: action.title,
      description: action.description,
    };

    updatedPosts = [...state.posts];
    updatedPosts[existingPostIndex] = updatedItem;

    return {
      posts: updatedPosts,
      loading: state.loading,
      search: state.search,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedPosts;

    updatedPosts = state.posts.filter(post => post._id !== action.id);

    return {
      posts: updatedPosts,
      loading: state.loading,
      search: state.search,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedPosts;

    updatedPosts = state.posts.filter(post => post._id !== action.id);

    return {
      posts: updatedPosts,
      loading: state.loading,
      search: state.search,
    };
  }
};

const PostProvider = props => {
  const [postState, dispatchPostAction] = useReducer(
    postReducer,
    defaultPostState
  );

  const addPostHandler = post => {
    dispatchPostAction({ type: 'ADD', post: post });
  };
  const removePostHandler = id => {
    dispatchPostAction({ type: 'REMOVE', id: id });
  };

  const updatePosttHandler = post => {
    dispatchPostAction({ type: 'UPDATE', post: post });
  };

  const postContext = {
    posts: postState.posts,
    loading: postState.loading,
    search: postState.search,
    addPost: addPostHandler,
    removePost: removePostHandler,
    updatePost: updatePosttHandler,
    clearSearch: () => {},
    getPosts: () => {},
  };

  return (
    <PostContext.Provider value={postContext}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;
