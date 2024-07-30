export interface IUser {
  name: string;
  email: string;
  id: string;
  role: "user" | "admin" | "super-admin" | "string";
  access_token: string;
  image: string;
}
