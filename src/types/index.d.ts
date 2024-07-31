import { Session, type DefaultSession } from "next-auth";

interface CustomSession extends Session {
  user: {
    id: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    role: string;
    access_token: string;
  };
  expires: DefaultSession["expires"];
}

export interface User {
  id: string;
  email: string;
  fullname?: string;
  avatar_url: string;
  first_name?: string;
  last_name: string;
  role: string;
  access_token: string;
}
