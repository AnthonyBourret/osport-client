import React from 'react';

interface EventInfoProps {
  date: string;
  sport: number;
  nbPlayers: number;
  status: string;
  duration: number;
  location: string;
}

function EventInfo({
 date, sport, nbPlayers, status, duration, location,
}: EventInfoProps) {
  return (
    <div className="flex flex-col items-center gap-3 w-full bg-neutral-focus py-4 shadow-sm rounded-xl border border-base-300">

      {/* Progress bar container */}
      <ul className="steps w-full py-6 font-semibold">
        <li className="step text-xs min-[900px]:text-sm step-info" data-content="⏳">Preparation</li>
        <li className={`step text-xs min-[900px]:text-sm ${status !== 'open' ? 'step-info' : 'step'}`} data-content="✔">Confirmation</li>
        <li
          className={`step text-xs min-[800px]:text-sm ${status === 'closed' || status === 'finished' ? 'step-info' : 'step'}`}
          data-content={sport === 1 ? '⚽' : '🏀'}
        >
          Playing
        </li>
        <li className={`step text-xs min-[900px]:text-sm ${status === 'finished' ? 'step-info' : 'step'}`} data-content="🏆">Full Time</li>
      </ul>

      {/* Event tags container */}
      <div className="flex gap-4 p-2 flex-wrap justify-center">
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">{date}</div>
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">
          {/* Si l'id du sport est 1 => Football, si 2 => Basketball */}
          {sport === 1 ? 'Football' : 'Basketball'}
        </div>
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">
          {/* Si le nombre de joueurs est de 6 => 3v3 si 10 => 5v5 */}
          {nbPlayers === 6 ? '3v3' : '5v5'}
        </div>
        {duration && (
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">
          {duration}
          <span className="pl-1">min</span>
        </div>
          )}
        {location && (
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">
          {location}
        </div>
          )}
      </div>
    </div>
  );
}

export default EventInfo;
