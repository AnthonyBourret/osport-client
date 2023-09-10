import React from 'react';

function TeamWin({ team } : { team: string }) {
  return (
    <h2 className="text-2xl text-center font-semibold py-8 text-success">{team}</h2>
  );
}

export default TeamWin;