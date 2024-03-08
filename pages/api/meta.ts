import { turso } from "@lib/turso";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const store = await turso.execute("SELECT * FROM stores WHERE id = 1");
    res.status(200).json({  success: true, meta: store.rows[0], });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}