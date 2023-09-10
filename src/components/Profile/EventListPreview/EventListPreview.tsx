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
        lastEvents && lastEvents.map((eve) => (
          <LastEvent
            key={eve.id}
            id={eve.id}
            winnerTeam={eve.winner_team}
            sportName={eve.sport_name}
            scoreTeam1={eve.score_team_1}
            scoreTeam2={eve.score_team_2}
            userTeam={eve.user_team}
          />
          ))
     }
    </div>
  );
}

export default EventListPreview;
