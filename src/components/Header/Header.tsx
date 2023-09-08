import React from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-6 w-full bg-neutral-focus">
      {/* <img className="w-18 h-16" src="/imageedit_3_3008038748.png" alt="logo" /> */}
      <h1 className="text-4xl py-2">O'sport</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
