import React from 'react';
import PlayerComp from '../Player/PlayerComp';
import type { Players } from '../interface';

function PlayerListConfirmed({ players, nbPlayers }: Players) {
  return (
    <div className="flex flex-col items-center gap-2 bg-neutral-focus py-8 shadow-sm rounded-xl border border-base-300 w-full h-full">

      {/* Première équipe */}
      <h2 className="text-2xl text-center py-2">Team 1</h2>

      {/* La classe de la <div> changera automatiquement selon le nombre de joueurs max. */}
      {players && (
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">

        {/* On filtre les joueurs pour n'afficher que ceux de la l'équipe 1
        On map sur le tableau qui a été filter pour générer les avatars */}
        {players && players
        .filter((player) => player.team === 1)
        .map((player) => (
          <PlayerComp
            id={player.user.id}
            key={player.user.id}
            avatar={player.user.avatar}
            status={player.status}
            username={player.user.username}
          />
        ))}
      </div>
      )}

      {/* Séparateur entre les 2 équipes */}
      <div className="divider px-10 my-8">VS</div>

      {/* Deuxième équipe */}
      <h2 className="text-2xl text-center py-2">Team 2</h2>

      {/* Même procédé que pour la première équipe */}
      {nbPlayers && (
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">

        {players && players
        .filter((player) => player.team === 2)
        .map((player) => (
          <PlayerComp
            id={player.user.id}
            key={player.user.id}
            avatar={player.user.avatar}
            status={player.status}
            username={player.user.username}
          />
        ))}
      </div>
      )}
    </div>
  );
}

export default PlayerListConfirmed;
