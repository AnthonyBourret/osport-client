/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
// We accept only picsum url for faker user or
// pixabay for user without avatar;
import OriginAvatarUrl from '../../../utils/originAvatarUrl';
import PlayerRatingModal from '../PlayerListRating/PlayerRatingModal/PlayerRatingModal';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  userId : number;
  avatar : string;
  username : string;
  status : Status;
  userIdToRate: number;
  sportId: number;
  eventId: number;
}

function Player({
  userId,
  avatar,
  username,
  status,
  userIdToRate,
  sportId,
  eventId,
} : PlayerProps) {
  return (
    <div className="indicator">
      <div
        className={`flex flex-col items-center justify-center gap-y-1 ${userIdToRate !== userId && 'cursor-pointer'}`}

      >
        {status === 'pending'
        ? <span className="indicator-item badge bg-blue-400 text-black font-bold aspect-square mt-1 mr-2 border border-neutral pb-2">...</span>
        : <span className="indicator-item badge bg-green-400 font-bold text-black aspect-square mt-1 mr-2 border border-neutral">✓</span>}
        <div className="w-12 aspect-square rounded-full sm:w-16 overflow-hidden">
          <img src={OriginAvatarUrl(avatar)} alt={username} className="object-cover w-full" />
        </div>
        <p className="flex text-center text-xs gap-1 items-center justify-center">
          {username}
        </p>
      </div>

      <PlayerRatingModal
        userId={userId}
        sportId={sportId}
        eventId={eventId}
        userIdToRate={userIdToRate}
      />
    </div>

  );
}

export default Player;
