import OAuthProvider from "netlify-cms-oauth-provider-node";

const provider = new OAuthProvider({
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
});

export default provider.handler;
