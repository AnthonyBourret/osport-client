import React, { useContext, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { EventContext } from '../../../context/EventContext';
import AuthContext from '../../../context/AuthContext';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';
import Spinner from '../../Spinner/Spinner';

function FriendsToInvite() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  const { data: superInfos, loading: userInfoLoading } = useFetch(`user/${id}`, 'GET');

  const { eventData, setEventData } = useContext(EventContext);
  const { data: friends } = useFetch(`user_friends/accepted/${id}`, 'GET');

  const handleCheckboxChange = (friendId, friendUsername, avatarUrl) => {
    const isFriendSelected = eventData.friends.some((friend) => friend.id === friendId);

    if (isFriendSelected) {
      // Si l'ami est déjà dans la liste, on le retire
      setEventData({
        ...eventData,
        friends: eventData.friends.filter((friend) => friend.id !== friendId),
      });
    } else {
      // Si l'ami n'est pas dans la liste, on l'ajoute
      setEventData({
        ...eventData,
        friends: [...eventData.friends, {
          id: friendId,
          username: friendUsername,
          avatar: OriginAvatarUrl(avatarUrl),
        }],
      });
    }
  };

  useEffect(() => {
    // On utilise prevEventData pour éviter une boucle infinie
    setEventData((prevEventData) => ({
      ...prevEventData,
      creator: {
        id,
        username: superInfos?.username,
        avatar: superInfos?.image_url,
      },
    }));
  }, [id, superInfos, setEventData]);

  return (
    <div className="flex flex-col gap-3 w-full sm:w-1/2 sm:self-start bg-neutral-focus p-4 shadow-sm border rounded-xl border-base-300 max-h-[500px] overflow-y-scroll">
      <h2 className="text-xl pb-6 sm:text-3xl">Chose participants</h2>
      {userInfoLoading
        ? <div className="flex items-center justify-center w-full my-8"><Spinner /></div>
        : (
          <ul className="w-full flex flex-col gap-4">

            {friends && friends.map((item) => (
              <li key={item.friend.username} className="flex justify-between items-center bg-neutral-focus shadow-md border border-base-100 rounded-xl p-2 px-3">
                <div className="avatar">
                  <div className="w-8 rounded-full sm:w-14">
                    <img
                      src={OriginAvatarUrl(item.friend.avatar)}
                      alt={`${item.friend.username} avatar`}
                    />
                  </div>
                </div>
                <h1 className="text-xl">{item.friend.username}</h1>
                <input
                  type="checkbox"
                  name="friend"
                  className="checkbox checkbox-sm border-2"
                  value={item.friend.id}
                  onChange={(e) => handleCheckboxChange(
                    e.target.value,
                    item.friend.username,
                    item.friend.avatar,
                  )}
                />
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default FriendsToInvite;
