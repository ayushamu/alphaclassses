import OAuthProvider from "netlify-cms-oauth-provider-node";

export default function handler(req, res) {
  const provider = new OAuthProvider({
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  });

  return provider.handler(req, res);
}
