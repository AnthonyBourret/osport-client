/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

function ResultLoader({ status } : { status: string }) {
  return (
    <>
      {(status === 'open' || status === 'full')
      // Si le statut du match est open, on affiche le premier loader
        ? <span className="text-lg pl-2 sm:text-3xl sm:pl-2.5">●</span>
      // Sinon, on affiche le deuxième loader (full ou closed)
        : <span className="loading loading-ball loading-md sm:loading-lg" />}
    </>
  );
}

export default ResultLoader;
