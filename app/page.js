import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
      <Link href="/news/id">Link 1</Link>
    </div>
  );
}