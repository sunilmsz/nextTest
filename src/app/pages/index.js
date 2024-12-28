import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Blogger</h1>
      <nav>
        <ul>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/terms">Terms and Conditions</Link></li>
          <li><Link href="/disclaimer">Disclaimer</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}