import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="pt-10 p-2 text-right sm:text-center">
      <Link
        to="/legal_mentions"
        onClick={() => window.scrollTo(0, 0)}
        className="link link-hover px-3 text-sm stat-desc"
      >
        Legal Mentions
      </Link>

      <Link
        to="/privacy_policy"
        onClick={() => window.scrollTo(0, 0)}
        className="link link-hover px-3 text-sm stat-desc"
      >
        Privacy Policy
      </Link>
    </div>
  );
}

export default Footer;
