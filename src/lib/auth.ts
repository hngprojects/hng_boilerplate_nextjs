import NextAuth from "next-auth";

const authOptions = NextAuth({
  providers: [],
});

export const { handlers, signIn, signOut, auth } = authOptions;
