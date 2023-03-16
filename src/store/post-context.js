import React from 'react';

const PostContext = React.createContext({
  posts: [],
  loading: false,
  search: null,
  addPost: post => {},
  removePost: id => {},
  updatePost: post => {},
  clearSearch: () => {},
  getPosts: () => {},
});

export default PostContext;
