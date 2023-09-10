/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

function ResultLoader({ status } : { status: string }) {
  return (
    <>
      {(status === 'open' || status === 'full')
      // Si le statut du match est open, on affiche le premier loader
        ? <span className="loading loading-dots loading-md sm:loading-lg" />
      // Sinon, on affiche le deuxième loader (full ou closed)
        : <span className="loading loading-spinner loading-md sm:loading-lg" />}
    </>
  );
}

export default ResultLoader;
