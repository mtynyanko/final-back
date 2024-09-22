export interface Payload {
  login: string;
  email: string;
  id: number;
  avatar: string | null;
}

export interface AuthResponse {
  payload: Payload;
  access_token: string;
}
