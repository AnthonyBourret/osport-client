import React from 'react';

function TeamLose({ team } : { team: string }) {
  return (
    <h2 className="text-2xl font-bold text-center py-2 text-error">{team}</h2>
  );
}

export default TeamLose;