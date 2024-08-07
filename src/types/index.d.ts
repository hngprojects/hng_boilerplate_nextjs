import { Session, type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomJWT extends JWT {
  id?: string;
  email?: string;
  picture?: string;
  avatar_url?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
  fullname?: string;
  access_token?: string;
}
export interface CustomSession extends Session {
  user: {
    id: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    role: string;
  };
  expires: DefaultSession["expires"];
  access_token?: string;
}

export interface User {
  id?: string;
  role?: string;
  email?: string;
  fullname?: string;
  avatar_url?: string;
  first_name?: string;
  last_name?: string;
  expires_in?: string;
}

export interface ApiResponseData {
  access_token: string;
  user: User;
}
export interface ApiResponse {
  status: string;
  status_code: number;
  message: string;
  data: ApiResponseData;
}

export interface Profile {
  id_token: string;
}

export interface AuthResponse {
  data: User;
  access_token: string;
}
export interface ErrorResponse {
  message: string;
  status_code?: number;
}

export interface Organisation {
  id: string;
  name: string;
  description: string;
  owner_id: string;
  email: string;
  industry: string;
  type: string;
  country: string;
  address: string;
  state: string;
  created_at: string;
  updated_at: string;
}
