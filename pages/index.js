import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/blog/list">
            <a>Blogs</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
