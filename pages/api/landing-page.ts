import { turso } from "@lib/turso";
import { NextApiRequest, NextApiResponse } from 'next';

export const getLandingPage = async() => {
  const banner = await turso.execute("SELECT * FROM banners WHERE storeId = 1");
  const store_branches = await turso.execute("SELECT * FROM store_branches WHERE storeId = 1");

  return  {
    banner: banner.rows,
    store_branches: store_branches.rows,
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getLandingPage();
    res.status(200).json({  success: true, data });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}