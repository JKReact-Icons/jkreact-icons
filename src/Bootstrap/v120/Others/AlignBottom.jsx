import React from 'react';

const AlignBottom = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
         <rect width="4" height="12" x="6" y="1" rx="1"/>
         <path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"/>
    </svg>
  );
};

export default AlignBottom;
