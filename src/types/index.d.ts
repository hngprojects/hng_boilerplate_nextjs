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

export interface extendedUser extends User {
  access_token?: string;
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
  user_role: "admin" | "manager" | "user" | string;
  organisation_id: string;
}

interface Metrics {
  current_month: number;
  previous_month: number;
  percentage_difference: string;
}

interface ActiveUsers {
  current: number;
  difference_an_hour_ago: number;
}

export interface DashboardData {
  revenue: Metrics;
  Subscriptions: Metrics;
  orders: Metrics;
  active_users: ActiveUsers;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export type MonthlyData = MonthlyRevenue[];

export type CloudinaryAsset = {
  url: string;
};

export type UpdateProfileType = {
  username?: string;
  jobTitle?: string;
  pronouns?: string;
  department?: string;
  email?: string;
  bio?: string;
  sociallinks?: string[];
  language?: string;
  region?: string;
  timezones?: string;
  profile_pic_url?: string;
};

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  cost_price: number;
  quantity: number;
  size?: "Small" | "Standard" | "Large";
  stock_status: "in stock" | "out of stock" | "preorder";
  created_at: string;
  updated_at: string;
}
