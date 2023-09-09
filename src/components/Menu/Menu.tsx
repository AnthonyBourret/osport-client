import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex w-full justify-center py-0 fixed bottom-0 bg-neutral-focus border-t-4 border-base-100
    sm:relative sm:-top-16 sm:w-fit sm:m-auto sm:border-none sm:bg-opacity-0 z-10"
    >
      <Link to="/"><button type="button" className="btn btn-ghost sm:btn-xl sm:text-lg">Profile</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />
      <Link to="/contact"><button type="button" className="btn btn-ghost sm:btn-xl sm:text-lg">Contacts</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />
      <Link to="/event_list"><button type="button" className="btn btn-ghost sm:btn-xl sm:text-lg">Events</button></Link>
      <div className="divider divider-horizontal m-0 py-1" />

      <div className="dropdown dropdown-hover">
        <button
          type="button"
          className="btn btn-ghost sm:btn-xl sm:text-lg"
        >
          Legal
        </button>
        {/* mt-4 on dropdown hover make diseppear the dropdown, pt-4 is ok */}
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 pt-4 bg-neutral-focus rounded-b-lg">
          <li><a href="/legal_mentions">Legal Mentions</a></li>
          <li><a href="/privacy_policy">Privacy Policy</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
