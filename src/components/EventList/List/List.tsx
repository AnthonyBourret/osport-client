import React from 'react';
import { Link } from 'react-router-dom';
import formDate from '../../../utils/formatDate';
import ResultLoader from '../ResultLoader/ResultLoader';
import ResultWin from '../ResultTitle/ResultWin';
import ResultLose from '../ResultTitle/ResultLose';
import { Event } from '../../types';
import ResultDraw from '../ResultTitle/ResultDraw';

function List({ events }: { events: Event[] }) {
  return (
    <ul className="w-full sm:px-5">
      {/* Si events existe, on map dessus */}
      {events && events.map((event: Event) => (
        <li
          className="bg-neutral-focus flex flex-col items-center gap-2 pb-10 shadow-sm border border-base-300 rounded-xl py-2 px-6 my-4 sm:items-center sm:justify-between"
          key={event.id}
        >
          {/* Loaders and Info container */}
          <div className="flex justify-between w-full">
            {event.status === 'finished' ? (
              <>
                {event.winner_team === event.user_team && <ResultWin />}
                {event.winner_team === 0 && <ResultDraw />}
                {(event.winner_team !== 0 && event.winner_team !== event.user_team)
                  && <ResultLose />}
              </>
            ) : (
              !event.winner_team && <ResultLoader status={event.status} />
            )}
            <div className="text-right">
              <div className="stat-desc text-sm sm:text-lg">{formDate(event.date)}</div>
              <div className="stat-desc text-xs sm:text-base">{event.sport_name}</div>
            </div>
          </div>

          {/* Match result/status container */}
          <div className="flex flex-col items-center sm:gap-2 sm:pb-0">
            {/* Si une équipe a gagné et au moins un score => on affiche le score final */}
            {event.status === 'finished' && (
            <div className="stat-value text-4xl sm:text-5xl">
              {event.score_team_1}
              {' '}
              -
              {' '}
              {event.score_team_2}
            </div>
            )}
            {/* Si pas de vainqueur et statut open => 'Game not started yet' */}
            {event.status === 'open' && <p className="text-md font-bold sm:text-2xl">Match not started yet</p>}
            {/* Si pas de vainqueur et statut diffèrent de open => 'Match in progress */}
            {event.status === 'closed' && <p className="text-md font-bold sm:text-2xl">Match in progress</p>}
            {event.status === 'full' && <p className="text-md font-bold sm:text-2xl">Match in preparation</p>}

            {/* Link to the event page */}
            {/* On envoie l'id de l'event dans l'url */}
            <Link to={`/event/${event.id}`}>
              <p className="link link-info text-md sm:text-lg">View Event</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
