import React from 'react';

const ShellCodeBlock = ({ content }) => {
  return (
    <>
    <span className='header'></span>
    <code className="shell">
      <pre>{content}</pre>
    </code>
    
    </>
  );
};

export default ShellCodeBlock;
