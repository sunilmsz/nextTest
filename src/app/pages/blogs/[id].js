import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data));
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}