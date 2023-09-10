import React from 'react';

function TeamDraw({ team } : { team: string }) {
  return (
    <h2 className="text-2xl font-semibold text-center py-8">{team}</h2>
  );
}

export default TeamDraw;
