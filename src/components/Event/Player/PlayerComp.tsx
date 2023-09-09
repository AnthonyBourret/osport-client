/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
// We accept only picsum url for faker user or
// pixabay for user without avatar;
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  id : number;
  avatar : string;
  username : string;
  status : Status;
  isConfirmed?: boolean;
  getUserToRateId?: (state : number) => void;
}

function PlayerComp({
 id, avatar, username, status, isConfirmed, getUserToRateId,
} : PlayerProps) {
const handleClick = () => {
  if (isConfirmed) {
    getUserToRateId(id);
  }
};

  return (
    <div className="indicator">
      <div
        className={`flex flex-col items-center justify-center gap-y-1 ${isConfirmed && 'cursor-pointer'}`}
        onClick={handleClick}
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
    </div>

  );
}

export default PlayerComp;
