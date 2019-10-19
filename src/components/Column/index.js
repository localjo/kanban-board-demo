import React from 'react';

const Column = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>{children}</ul>
    </>
  );
};

export default Column;
