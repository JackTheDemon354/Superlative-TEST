import NextAuth from "@auth/nextjs";
import GoogleProvider from "@auth/core/providers/google";
import GitHubProvider from "@auth/core/providers/github";
import DiscordProvider from "@auth/core/providers/discord";


export const authOptions = {
providers: [
GoogleProvider({
clientId: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}),
GitHubProvider({
clientId: process.env.GITHUB_ID,
clientSecret: process.env.GITHUB_SECRET,
}),
DiscordProvider({
clientId: process.env.DISCORD_CLIENT_ID,
clientSecret: process.env.DISCORD_CLIENT_SECRET,
}),
],
secret: process.env.NEXTAUTH_SECRET,
// callbacks: customize tokens/sessions here if you want
// session: { strategy: 'jwt' }, // default is jwt for Auth.js
};


export default NextAuth(authOptions);
