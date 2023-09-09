import React from 'react';
import { Link } from 'react-router-dom';
import formDateNumeric from '../../../utils/formatDateNumeric';

interface NextEventProps {
  id: number;
  location: string;
  date: string;
  sportName : string;
}

function NextEvent({
  id, location, date, sportName,
} : NextEventProps) {
  return (
    <div className="px-4 shadow-xl border border-base-300 rounded-xl bg-neutral-focus sm:mb-0 flex flex-col sm:flex-row sm:justify-around sm:items-center">
      <div className="py-4 text-left">
        <h2 className="text-left text-xl font-bold sm:w:2/5">{formDateNumeric(date)}</h2>
      </div>
      <div className="flex justify-between items-center gap-4 py-6 sm:w-3/5">
        <div className="stat-desc text-base font-bold w-1/5 text-center">{sportName}</div>
        <div className="stat-title text-base font-bold w-1/5 text-center">{location}</div>
        <Link to={`/event/${id}`}>
          <div className="link link-info stat-value text-base font-bold w-1/5 text-center">Go to event</div>
        </Link>
      </div>
    </div>
  );
}

export default NextEvent;
