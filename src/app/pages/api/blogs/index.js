import { blogs } from '../../../data/blogs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(blogs);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newBlog = { id: Date.now().toString(), title, content };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  }
}