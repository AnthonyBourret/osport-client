export interface Players {
  players: Player[];
  nbPlayers?: number;
}

export type Status = 'pending' | 'accepted' | 'rejected';

export interface Player {
  status: Status;
  user?: User;
  team?: number;
  image_url?: string;
}

export interface User {
  id: number;
  avatar: string;
  username: string;
  image_url?: string;
}
