import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex w-full left-0 justify-center py-0 fixed bottom-0 bg-neutral-focus border-t-4 border-base-100
    sm:absolute sm:w-fit sm:m-auto sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border-none sm:bg-opacity-0 z-10"
    >
      <Link to="/"><button type="button" className="btn btn-ghost text- sm:btn-xl sm:text-lg px-3 font-bold">Profile</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />
      <Link to="/contact"><button type="button" className="btn btn-ghost text-sm sm:btn-xl sm:text-lg px-3 font-bold">Contacts</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />
      <Link to="/event_list"><button type="button" className="btn btn-ghost text-sm sm:btn-xl sm:text-lg px-3 font-bold">Events</button></Link>
    </nav>
  );
}

export default Menu;
