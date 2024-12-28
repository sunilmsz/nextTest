import { blogs } from '../../../data/blogs';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } else if (req.method === 'PUT') {
    const { title, content } = req.body;
    const blogIndex = blogs.findIndex(b => b.id === id);
    if (blogIndex === -1) return res.status(404).json({ error: 'Blog not found' });
    blogs[blogIndex] = { ...blogs[blogIndex], title, content };
    res.status(200).json(blogs[blogIndex]);
  }
}