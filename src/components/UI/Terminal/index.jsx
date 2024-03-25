import React from 'react';

const ShellCodeBlock = ({ content }) => {
  return (
    <code className="shell">
      <pre>{content}</pre>
    </code>
  );
};

export default ShellCodeBlock;
