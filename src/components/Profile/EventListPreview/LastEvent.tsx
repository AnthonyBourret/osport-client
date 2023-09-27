import React from 'react';
import { Link } from 'react-router-dom';
import { LastEvents } from '../../types';

function displayResult(winnerTeam : number, userTeam : number) {
if (winnerTeam === 0) {
  return <div className="stat-title text-xs sm:text-base">DRAW</div>;
}
if (winnerTeam === userTeam) {
  return <div className="stat-title text-xs text-success sm:text-base">WIN</div>;
}
if (winnerTeam !== userTeam) {
  return <div className="stat-title text-xs text-error sm:text-base">LOSE</div>;
}
return '';
}

function LastEvent({
 id, winnerTeam, sportName, scoreTeam1, scoreTeam2, userTeam,
} : LastEvents) {
  return (
    <div className="flex stat justify-around items-center w-full p-2">
      <div className="stat-desc font-bold w-1/6">{displayResult(winnerTeam, userTeam)}</div>
      <div className="stat-value text-xs sm:text-base m-auto flex justify-center">
        <span>
          {scoreTeam1}
          {' '}
          <span>-</span>
          {' '}
          {scoreTeam2}
        </span>
      </div>
      <div className="stat-desc text-sm w-1/4 text-center">{sportName}</div>
      <Link to={`/event/${id}`}>
        <div className="link-info stat-value text-sm w-1/3 font-semibold text-center hover:underline">See event</div>
      </Link>
    </div>
  );
}

export default LastEvent;
