import React from 'react';

const AlignTop = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
        <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
        <path d="M1.5 2a.5.5 0 0 1 0-1zm13-1a.5.5 0 0 1 0 1zm-13 0h13v1h-13z"/>
    </svg>
  );
};

export default AlignTop;
