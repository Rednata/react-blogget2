import React from 'react';
import PropTypes from 'prop-types';
import { usePosts } from '../hooks/useposts';

export const postContext = React.createContext([]);

export const PostsContextProvider = ({ children }) => {
  const posts = usePosts([]);

  return (
    <postContext.Provider value={posts}>
      {children}
    </postContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
