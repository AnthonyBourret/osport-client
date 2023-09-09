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

export type Sport = {
  name: string;
  gb_rating: number;
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
