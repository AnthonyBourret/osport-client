import React from 'react';
import axiosInstance from '../../../services/axiosInstance';

interface AcceptDeclineButtonProps {
  askedId: number;
  askerId: number;
}
// Fonction qui permet d'accepter l'invitation
function AcceptDeclineButton({ askedId, askerId }: AcceptDeclineButtonProps) {
  async function addContact(askedUserId: number, userToAddId: number) {
    try {
      const response = await axiosInstance.patch('user_friends/accept', { userId: askedUserId, friendId: userToAddId });
      if (response.status === 204) window.location.reload();
      console.log('Server Response:', response);
    } catch (error) {
      console.log(error);
    }
  }
  // Fonction qui permet de refuser l'invitation
  async function refuseContact(askedUserId: number, userToAddId: number) {
    try {
      const response = await axiosInstance.patch('user_friends/reject', { userId: askedUserId, friendId: userToAddId });
      if (response.status === 204) window.location.reload();
      console.log('Server Response:', response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-2 self-end sm:self-auto">
      <button
        type="button"
        onClick={() => addContact(askedId, askerId)}
        className="btn btn-ghost border-gray-500 btn-xs text-success font-semibold"
      >
        Accept
      </button>
      <button
        type="button"
        onClick={() => refuseContact(askedId, askerId)}
        className="btn btn-ghost border-gray-500 btn-xs text-error font-semibold"
      >
        Decline
      </button>
    </div>
  );
}

export default AcceptDeclineButton;
