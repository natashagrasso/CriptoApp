import React from 'react';

export const Header = ({ titulo }) => {
  return (
    <nav className="text-center mb-11">
      <h1 className="text-4xl font-bold text-white transition duration-500 transform hover:scale-105 hover:text-yellow-500 hover:underline">
        {titulo}
      </h1>
    </nav>
  );
};
