import React from 'react';

function TeamDraw({ team } : { team: string }) {
  return (
    <h2 className="text-2xl font-bold text-center py-2">{team}</h2>
  );
}

export default TeamDraw;
