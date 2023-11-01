export type Event = {
  nb_max_participant: number;
  date: string,
  id: number,
  location: string,
  score_team_1?: number | null,
  score_team_2?: number | null,
  sport_name: string,
  status: string,
  user_team?: number | null,
  winner_team?: number | null,
  user_status?: string,
};


export type Participant = {
  team: number | null;
  event_id: number;
  status: string;
  created_at?: string;
  user: User
};

export type User = {
  id: number;
  email?: string;
  avatar?: string | null;
  username: string;
  password?: string;
  image_url?: string | null;
};

// Profile Page

export type ProfileInfos = {
  username : string;
  avatar : string;
  ratings : Sport[];
  ownRating : OwnRating[];
};

export type LastEvents = {
  id: number;
  winnerTeam: number;
  sportName : string;
  scoreTeam1: number;
  scoreTeam2: number;
  userTeam: number;
};

export type Sport = {
  name: string;
  gb_rating: number;
  nb_rating: number;
};

export type OwnRating = {
  rating?: number;
  name?: string;
};

// Contact Page

export type Contacts = {
  userId: number;
  contactList: ContactInfo[];
  filter: string;
};

export type ContactInfo = {
    friend: {
      avatar: string;
      username: string;
      email: string;
      id: number;
    };
    user_id: number;
    asker_id: number;
    status: string;
  };

  export type ContactInfoModal = {
    avatar: string;
    username: string;
    email: string;
  };

  export type InvitationButton = {
    askedId: number;
    askerId: number;
  };

  export type FilterSelection = {
    setfilter: (filter: string) => void;
  };

  // Event Page

  export type EventInfos = {
    date: string;
    sport: number;
    nbPlayers: number;
    status: string;
    duration: number;
    location: string;
  };
