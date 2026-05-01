export type UserAuthType = {
   id: string;
  username: string;
  email: string;
  bio: string;
  seguidores: {
    id: string;
    username: string;
  }[];
  seguidos: {
    id: string;
    username: string;
  }[];
}

export type AuthResponse = {
  user: UserAuthType;
  token: string;
};