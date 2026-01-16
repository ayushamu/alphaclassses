export default function handler(req, res) {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).end();
  }

  const token = auth.split(" ")[1];

  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).end();
  }

  res.status(200).json({ ok: true });
}
