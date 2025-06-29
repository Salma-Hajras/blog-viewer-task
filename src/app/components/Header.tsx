import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
         Buguard
        </Link>
        <nav className="space-x-6 hidden sm:block">
          <Link
            href="/posts"
            className="text-gray-700 hover:text-black transition"
          >
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
