import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress'

const Loader = ({ children, loading }) => {
  return loading
    ? <LinearProgress />
    : children;
};

export default Loader;
