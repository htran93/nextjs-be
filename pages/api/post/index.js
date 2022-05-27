import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = await fs.readFile(filePath);
  res.status(200).json(JSON.parse(jsonData))
}
