import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex w-full justify-center py-0 fixed bottom-0 bg-neutral-focus border-t-4 border-base-100
    sm:relative sm:-top-16 sm:w-fit sm:m-auto sm:border-none sm:bg-opacity-0 z-10"
    >
      <Link to="/"><button type="button" className="btn btn-ghost text- sm:btn-xl sm:text-lg px-3">Profile</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />
      <Link to="/contact"><button type="button" className="btn btn-ghost text-sm sm:btn-xl sm:text-lg px-3">Contacts</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />
      <Link to="/event_list"><button type="button" className="btn btn-ghost text-sm sm:btn-xl sm:text-lg px-3">Events</button></Link>
    </nav>
  );
}

export default Menu;
