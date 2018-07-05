import React from 'react';
import '../../scss/components/loading-content.scss';

const LoadingContent = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default LoadingContent;
