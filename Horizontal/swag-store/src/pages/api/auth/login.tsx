import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const url = 'frank-corgi-nice.ngrok-free.app/api/auth/login';
    const content = { email: req.body.email, password: req.body.password };
    axios
      .post(url, content)
      .then((data) => {
        const cookie =
          data?.headers['set-cookie']?.concat([
            `email=${req.body.email}; path=/; secure; HttpOnly; SameSite=None`,
          ]) ?? '';
        res.setHeader('set-cookie', cookie);
        res.status(200).json({ data: data.data.message, success: data.data.success });
      })
      .catch(() => {
        res.status(500).send('Error in Sitecore Server');
      });
  }
}
