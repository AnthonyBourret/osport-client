import React from 'react';
import axiosInstance from '../../../services/axiosInstance';
import Ban from '../../../assets/Icons/Ban';
import CheckedSquare from '../../../assets/Icons/CheckedSquare';

function ResponseInvitation({ eventId, userId } : { eventId: number, userId: number }) {
  const acceptInvitation = async () => {
     await axiosInstance.patch('participant/event', {
        status: 'accepted',
        eventId,
        userId,
}).then((res) => console.log(res.data)).catch((err) => console.log(err));
};

const declineInvitation = async () => {
   await axiosInstance.patch('participant/event', {
    status: 'rejected',
    eventId,
    userId,
  }).then((res) => console.log(res.data)).catch((err) => console.log(err));
};

const handleClickAccept = () => {
  acceptInvitation();
};

const handleClickReject = () => {
  declineInvitation();
};

  return (
    <div className="flex flex-col items-center text-sm">
      <p>You are invited to this event</p>
      <p> Do you want to confirm your participation ?</p>
      <div className="flex gap-3 pt-4">
        <button type="button" className="btn btn-neutral btn-sm flex gap-2 items-center justify-center text-success" onClick={handleClickAccept}>
          Yes
        </button>
        <button type="button" className="btn btn-neutral btn-sm flex gap-2 items-center justify-center text-error" onClick={handleClickReject}>
          No
        </button>
      </div>
    </div>
  );
}

export default ResponseInvitation;
