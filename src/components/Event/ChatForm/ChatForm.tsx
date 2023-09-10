import React, { useRef, useId, useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';

interface ChatFormProps {
  eventId: number;
  userId: number;
  getMessage: (message: any) => void;
  username: string;
  avatar: string;
}

function ChatForm({
 eventId, userId, getMessage, username, avatar,
}: ChatFormProps) {
  // Input pour définir la valeur de l'input, si null, le bouton d'envoi est désacivé
  const [inputValue, setInputValue] = useState(null);
  const messageForm: any = useRef();
  const tempId = useId();

  const postMessage = async (data) => {
      try {
        const res = await axiosInstance.post('/chat', data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = inputValue;

      const data = {
            message,
            user_id: userId,
            event_id: eventId,
        };
      postMessage(data).then((res) => console.log(res));
      getMessage({
            id: tempId,
            event_id: eventId,
            message,
            created_at: new Date(),
            user: {
              id: userId,
              username,
              avatar,
      },
    });
    messageForm.current?.reset();
    // On réinitialise la valeur de l'input à 'null'
    setInputValue(null);
  };

  return (
    <div className="flex w-full h-[11%] justify-center gap-3 border-t-2 border-neutral-focus min-[800px]:h-[10%]">
      <form autoComplete="off" onSubmit={handleSubmit} className="flex w-full h-full" ref={messageForm}>
        <input
          name="message"
          id="message"
          type="text"
          placeholder="Type here"
          // La valeur de l'input change quand du texte est saisi dans ce dernier
          onChange={(e) => setInputValue(e.target.value)}
          className="input w-[85%] h-full border-2 border-neutral-focus rounded-t-none"
        />
        <button type="submit" className={`w-[15%] ${inputValue === null ? 'btn-disabled' : 'btn'} btn-ghost font-semibold`}>Send</button>
      </form>
    </div>
  );
}

export default ChatForm;
