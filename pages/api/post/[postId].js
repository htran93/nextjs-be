import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const postId = req.query.postId
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = await fs.readFile(filePath);
  const selectedPost = JSON.parse(jsonData).find((post) => post.id.toString() === postId) || {}
  res.status(200).json(selectedPost)
}