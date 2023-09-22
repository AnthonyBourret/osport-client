import React from 'react';
import LastEvent from './LastEvent';
import type { Event } from '../../types';

function EventListPreview({ lastEvents, error } :
{ lastEvents : Event[],
error : string | null | undefined }) {
  if (error) return null;
  return (

    <div className="stats w-full stats-vertical shadow-xs border border-base-300 rounded-xl mb-4 p-2 bg-neutral-focus sm:mb-0 sm:p-2 sm:w-1/2">
      <h1 className="m-0 text-2xl py-3 pl-1 h-fit w-fit sm:pb-0 font-semibold">Last results</h1>
      {
        lastEvents && lastEvents.length > 0 ? lastEvents.map((event) => (
          <LastEvent
            key={event.id}
            id={event.id}
            winnerTeam={event.winner_team}
            sportName={event.sport_name}
            scoreTeam1={event.score_team_1}
            scoreTeam2={event.score_team_2}
            userTeam={event.user_team}
          />
          )) : <div className="p-4 border-neutral-focus bg-neutral-focus text-lg sm:text-center font-semibold">You don't have played games yet</div>
          }
    </div>
  );
}

export default EventListPreview;
