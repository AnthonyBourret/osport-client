import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="absolute bottom-14 sm:bottom-2 right-1">
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
