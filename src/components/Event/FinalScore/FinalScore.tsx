/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */

import React from 'react';
import FinalScoreVictory from './FinalScoreNumber/FinalScoreVictory';
import FinalScoreDefeat from './FinalScoreNumber/FinalScoreDefeat';
import FinalScoreDraw from './FinalScoreNumber/FinalScoreDraw';

interface ScoreProps {
  firstTeamScore: number;
  secondTeamScore: number;
}
function FinalScore({ firstTeamScore, secondTeamScore }: ScoreProps) {
  return (
    <div className="flex flex-col gap-4 items-center px-6 bg-neutral-focus p-4 shadow-sm border rounded-xl border-base-300 w-full h-full sm:flex-row sm:justify-evenly">
      <h2 className="text-2xl">Final Score</h2>
      <div className="flex p-4">
        <div className="flex flex-col gap-3">

          {/* Première équipe */}
          <h3 className="font-bold">Team 1</h3>

          {/* // Nested ternary pour afficher le composant qui affiche le score avec la bonne couleur
          // Si les scores sont égaux, on affiche <FinalScoreDraw />
          // Si le score n'est pas égal et que le score de la première équipe est supérieur,
          // on affiche <FinalScoreVictory />
          // sinon on affiche <FinalScoreDefeat /> */}
          {
            firstTeamScore === secondTeamScore
            ? <FinalScoreDraw score={firstTeamScore} />
            : firstTeamScore > secondTeamScore
            ? <FinalScoreVictory score={firstTeamScore} />
            : <FinalScoreDefeat score={firstTeamScore} />
          }
        </div>

        {/* Séparateur entre les 2 équipes */}
        <div className="divider divider-horizontal" />
        <div className="flex flex-col gap-3">

          {/* Deuxième équipe */}
          <h3 className="font-bold">Team 2</h3>

          {/* Même procédé que pour la première équipe en inversant la comparaison */}
          {
            firstTeamScore === secondTeamScore
            ? <FinalScoreDraw score={secondTeamScore} />
            : firstTeamScore < secondTeamScore
            ? <FinalScoreVictory score={secondTeamScore} />
            : <FinalScoreDefeat score={secondTeamScore} />
          }
        </div>
      </div>
    </div>
  );
}

export default FinalScore;
