/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useContext, useState, useRef } from 'react';
import AuthContext from '../../../context/AuthContext';
import axiosInstance from '../../../services/axiosInstance';
import TeamResult from './TeamResultTitle/TeamResult';
import PlayerComp from '../Player/PlayerComp';
import type { Player } from '../interface';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';
import PlayerModal from './PlayerModal/PlayerModal';

interface PlayersListProps {
  players: Player[];
  nbPlayers: number;
  firstTeamScore: number;
  secondTeamScore: number;
  sportId: number;
  eventId: number;
}

function PlayerListRating({
  players,
  nbPlayers,
  firstTeamScore,
  secondTeamScore,
  sportId,
  eventId,
}: PlayersListProps) {
  // Fonction pour définir le nombre de colonnes à indiquer dans la classe de la <div>
  // en fonction du nombre de joueurs max. (qu'on divise par 2)

  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const [userIdToRate, setUserIdToRate] = useState<number>(null);

  const formModal = useRef<HTMLFormElement>(null);

  const openModal = () => {
    formModal.current.reset();
    (window as any).ratingModal.showModal();
  };

  function closeModal() {
    (window as any).ratingModal.close();
  }

  // get userIdToRate from child component
  // state is the id of the user to rate
  function getUserToRateId(state : number) {
    setUserIdToRate(state);
  }

  async function rateUser(userRating: number, playerToRateId: number) {
    try {
      const res = await axiosInstance.post('rating/sport', {
          rating: Number(userRating),
          user_id: playerToRateId,
          sport_id: sportId,
          rater_id: userId,
          event_id: eventId,
        });
      console.log('Server Response:', res);
      } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center bg-neutral-focus p-4 shadow-sm border rounded-xl border border-base-300 w-full h-full ">

      <p className="bg-neutral-focus p-4 shadow-md text-base rounded-xl text-center mx-1 my-2 sm:m-4 font-semibold">
        You can rate other players by clicking their profile pictures
      </p>
      {/* Première équipe */}

      <TeamResult scoreTeam1={firstTeamScore} scoreTeam2={secondTeamScore} team="Team 1" />

      {/* La classe de la <div> changera automatiquement selon le nombre de joueurs max. */}
      {nbPlayers && (
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">

        {/* On filtre les joueurs pour n'afficher que ceux de la l'équipe 1
        On map sur le tableau qui a été filter pour générer les avatars */}
        {players && players
        .filter((player) => player.team === 1)
        .map((player) => (
          <div
            onClick={player.user.id !== userId && (() => openModal())}
            key={player.user.id}
          >
            <PlayerComp
              userId={userId}
              userToRateId={player.user.id}
              avatar={OriginAvatarUrl(player.user.avatar)}
              status={player.status}
              username={player.user.username}
              getUserToRateId={getUserToRateId}
            />
          </div>
        ))}
      </div>
      )}

      {/* Séparateur entre les 2 équipes */}

      <div className="divider px-6 my-6 font-bold">VS</div>

      {/* Deuxième équipe */}

      {/* Même procédé que pour la première équipe en inversant la comparaison */}
      <TeamResult scoreTeam1={secondTeamScore} scoreTeam2={firstTeamScore} team="Team 2" />

      {/* Même procédé que pour la première équipe */}
      {nbPlayers && (
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">
        {players && players
        .filter((player) => player.team === 2)
        .map((player) => (
          <div onClick={() => openModal()} key={player.user.id}>
            <PlayerComp
              userId={userId}
              userToRateId={player.user.id}
              avatar={OriginAvatarUrl(player.user.avatar)}
              status={player.status}
              username={player.user.username}
              getUserToRateId={getUserToRateId}
            />
          </div>
        ))}
      </div>
      )}
      <PlayerModal
        userIdToRate={userIdToRate}
        closeModal={closeModal}
        rateUser={rateUser}
        formModal={formModal}
        userId={userId}
      />

    </div>
  );
}

export default PlayerListRating;
