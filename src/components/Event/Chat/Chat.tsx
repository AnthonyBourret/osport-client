import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import ChatForm from '../ChatForm/ChatForm';
import ChatMessage from '../ChatMessage/ChatMessage';
import RefreshIcon from '../../../assets/Icons/RefreshIcon';

function Chat({ eventId }: { eventId: number }) {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const { data: userInfos } = useFetch(`user/${userId}`, 'GET');
  const { data: historic } = useFetch(`chat/event/${eventId}`, 'GET');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!historic) return;
    setMessages(historic);
  }, [historic]);

  const getMessage = (message) => {
    setMessages((prev) => {
      const newMessages = [message, ...prev];
      return newMessages;
    });
  };

  // Fonction pour rafraichir la page
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-full h-[100vh] bg-neutral-focus shadow-sm border rounded-xl border-base-300 min-[800px]:h-full">
      <div className="w-full flex justify-between bg-base-100 border-2 border-neutral-focus rounded-xl rounded-b-none">
        <h2 className="text-2xl p-4">Messages</h2>
        <button type="button" onClick={handleClick}>
          <RefreshIcon />
        </button>
      </div>
      <div className="h-full">
        <div className="flex flex-col-reverse h-[90%] gap-2 p-2 overflow-y-auto w-full min-h-0 bg-neutral-focus shadow-xl rounded-xl border-gray-700 rounded-b-none rounded-t-none border-t-0 min-[800px]:h-[88%]">
          {messages && messages.map((message) => (
            <ChatMessage
              author={message.user.username}
              message={message.message}
              key={message.id}
              avatar={message.user.avatar}
              createdAt={message.created_at}
              userIdMessage={message.user.id}
              userId={userId}
            />
          ))}
        </div>
        <ChatForm
          eventId={eventId}
          userId={userId}
          avatar={userInfos?.image_url}
          username={userInfos?.username}
          getMessage={getMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
