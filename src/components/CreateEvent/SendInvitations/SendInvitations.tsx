import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import type { EventContextProps } from '../../../context/EventContext';
import { EventContext } from '../../../context/EventContext';
// import useFetch from '../../hooks/useFetch';
import AuthContext from '../../../context/AuthContext';
import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

function SendInvitations() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  const { eventData }: EventContextProps = useContext(EventContext);
  const eventDataWithUserId = { ...eventData, userId: id };

  const baseUrl = import.meta.env.VITE_SERVER_URL;

  const navigate = useNavigate();

  const sendInvitations = async (eventId) => {
    try {
      const userIds = [...eventData.friends].map((friend) => Number(friend.id));
      if (eventId !== null) {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/participant/event`, { eventId, ids: userIds });
        if (response.status === 201) {
          navigate(`/event/${eventId}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateEvent = async () => {
    try {
      const response = await axios.post(`${baseUrl}/event`, eventDataWithUserId);
      if (response.data.error) {
        console.log(response.data.error);
          return;
          }
      if (response.data.data) {
        sendInvitations(response.data.data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 px-4 bg-neutral-focus shadow-sm border rounded-xl border-base-300 sm:w-1/2 sm:h-fit">
      <h2 className="text-sm flex items-center">
        {/* +1 to include the creator */}
        {eventData.friends.length + 1 === eventData.nbMaxParticipant && (
          <img src="https://img.icons8.com/?size=512&id=63312&format=png" className="w-7" alt="valid" />
        )}
        {eventData.friends.length + 1 > eventData.nbMaxParticipant && (
          <img src="https://img.icons8.com/?size=512&id=63690&format=png" className="w-7" alt="valid" />
        )}
        <span className="badge badge-base-100 badge-lg mx-2 p-2">{eventData.friends.length + 1}</span>
        players on
        <span className="badge badge-base-100 badge-lg mx-2 p-2">{eventData.nbMaxParticipant}</span>
        required
      </h2>

      <div className="flex flex-wrap gap-8 my-5 justify-center max-w-[500px]">

        {/* One individual div for the creator */}
        <div key={eventData.creator.id} className="flex items-center gap-2 flex-col">
          <div className="avatar">
            <div className="w-12 sm:w-16 rounded-full">
              <img
                src={OriginAvatarUrl(eventData.creator.avatar)}
                alt={`${eventData.creator.username} avatar`}
              />
            </div>
          </div>
          <span>{eventData.creator.username}</span>
        </div>

        {eventData.friends.map((friend) => (
          <div key={friend.id} className="flex items-center gap-2 flex-col">
            <div className="avatar">
              <div className="w-12 sm:w-16 rounded-full">
                {friend.avatar ? <img src={friend.avatar} alt="avatar" /> : <img src={PlayerDefaultIcon} alt={friend.username} /> }
              </div>
            </div>
            <span>{friend.username}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`btn ${eventData.friends.length + 1 === eventData.nbMaxParticipant ? 'btn-wide btn-ghost border-gray-500 shadow-sm' : 'btn-disabled'}`}
        disabled={eventData.friends.length + 1 > eventData.nbMaxParticipant}
        onClick={handleCreateEvent}
      >
        Create the event
      </button>
    </div>
  );
}

export default SendInvitations;
