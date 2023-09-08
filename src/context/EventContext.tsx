import React, {
 createContext, useState, ReactNode, FC, useMemo,
} from 'react';

export type Friend = {
  id: number;
  username: string;
  avatar?: string;
};

export type EventContextProps = {
  eventData: {
    eventDate?: string;
    location?: string;
    duration?: number;
    nbMaxParticipant?: number;
    sportId?: number;
    friends?: Friend[];
    creator: Friend;
  };
  setEventData: React.Dispatch<React.SetStateAction<
    {
      eventDate?: string;
      location?: string;
      duration?: number;
      nbMaxParticipant?: number;
      eventStatus?: string;
      sportId?: number;
      friends?: Friend[];
      creator: Friend;
    }
  >>;
};

export const EventContext = createContext<EventContextProps>({
  eventData: {
    eventDate: '',
    location: '',
    // NaN for all number types and to avoid all possible errors anywhere else in the code
    duration: 30,
    nbMaxParticipant: 6,
    sportId: 0,
    friends: [],
    creator: {
      id: NaN,
      username: '',
      avatar: '',
    },
  },
  setEventData: () => {},
});

interface Props {
  children?: ReactNode;
}

// <Partial<Props>> is used to make the props optional (with also ? in the interface)
export const EventContextProvider: FC<Partial<Props>> = ({ children }) => {
  // Here we initialize the event
  const [eventData, setEventData] = useState({
    eventDate: '',
    location: 'Just here',
    duration: 30,
    nbMaxParticipant: 6,
    sportId: 0,
    friends: [],
    creator: {
      id: NaN,
      username: '',
      avatar: '',
    },
  });

  const eventState: EventContextProps = useMemo(() => (
    { eventData, setEventData }
  ), [eventData, setEventData]);

    // const navigate = useNavigate();

  return (
    <EventContext.Provider value={eventState}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
