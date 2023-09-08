import React from 'react';

function FinalScoreVictory({ score } : { score: number }) {
  return (
    <h4 className="text-3xl font-bold text-center text-success bg-base-100 py-2 px-3 shadow-xl border rounded-xl border-gray-700">
      {score}
    </h4>
  );
}

export default FinalScoreVictory;
