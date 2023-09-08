import React from 'react';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

interface ChatConfig {
  author: string;
  message: string;
  avatar: string;
  createdAt: string;
  userIdMessage: number;
  userId: number;
}

function ChatMessage({
  author,
  message,
  avatar,
  createdAt,
  userIdMessage,
  userId,
} : ChatConfig) {
  // Fonction pour formater la date
  const formatDate = (date: string) => new Date(date).toLocaleString();

  return (
    // Si l'userId est le même que l'userIdMessage, on affiche le message à gauche (start)
    // Et inversement, on affiche le message à droite (end) si l'auteur est différent
    <div className={`chat ${userIdMessage === userId ? 'chat-start' : 'chat-end'} px-4 py-2`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={OriginAvatarUrl(avatar)} alt="author" />
        </div>
      </div>
      <div className="chat-header">
        {author}
        {createdAt && (
          <time className="text-xs p-1 opacity-50">{formatDate(createdAt)}</time>
        )}
      </div>
      <div className="chat-bubble px-4">{message}</div>
    </div>
  );
}

export default ChatMessage;
