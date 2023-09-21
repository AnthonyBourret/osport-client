import React from 'react';
// We accept only picsum url for faker user or
// pixabay for user without avatar;
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  userId : number;
  userToRateId : number;
  avatar : string;
  username : string;
  status: Status;
  getUserToRateId: (state : number) => void;
}

function PlayerComp({
  userId, userToRateId, avatar, username, status, getUserToRateId,
}: PlayerProps) {
  const handleClick = () => getUserToRateId(userToRateId);

  return (
    <div className="indicator">
      <div
        className={`flex flex-col items-center justify-center gap-y-1 ${userId !== userToRateId ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleClick();
          }
        }}
        role="button"
        aria-label="Rate this player"
        tabIndex={userId !== userToRateId ? 0 : -1}
      >
        {status === 'pending'
        ? <span className="indicator-item badge bg-blue-400 text-black font-bold aspect-square mt-1 mr-2 border border-neutral pb-2">...</span>
        : <span className="indicator-item badge bg-green-400 font-bold text-black aspect-square mt-1 mr-2 border border-neutral">✓</span>}
        <div className={`w-12 aspect-square rounded-full sm:w-16 overflow-hidden border-2 border-transparent ${userId !== userToRateId && 'hover:border-neutral hover:grayscale-[50%]'}`}>
          <img
            src={OriginAvatarUrl(avatar)}
            alt={username}
            className="object-cover"
          />
        </div>
        <p className="flex text-center text-xs gap-1 items-center justify-center">
          {username}
        </p>
      </div>
    </div>

  );
}

export default PlayerComp;
