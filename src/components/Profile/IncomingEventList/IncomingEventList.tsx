import React from 'react';
import NextEvent from './NextEvent';
import { Event } from '../../types';

function IncomingEventList({ nextEvents } : { nextEvents : Event[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl pl-2 font-semibold">Next events</h2>
      {nextEvents && nextEvents.length > 0 ? nextEvents.map((event) => (
        <NextEvent
          date={event.date}
          key={event.id}
          id={event.id}
          sportName={event.sport_name}
          location={event.location}
        />
    )) : <p className="p-4 shadow-sm border border-base-300 rounded-xl bg-neutral-focus text-lg sm:mb-0 font-semibold">You don't have any events planed</p>}
    </div>
  );
}

export default IncomingEventList;
