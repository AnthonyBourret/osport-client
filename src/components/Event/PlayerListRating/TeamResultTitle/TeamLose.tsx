import React from 'react';

function TeamLose({ team } : { team: string }) {
  return (
    <h2 className="text-2xl font-semibold text-center py-8 text-error">{team}</h2>
  );
}

export default TeamLose;