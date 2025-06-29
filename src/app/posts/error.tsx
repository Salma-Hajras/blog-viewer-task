'use client';

import Link from "next/link";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="p-8 max-w-xl mx-auto mt-10 bg-white rounded shadow text-center space-y-4 text-red-700">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="text-sm">We couldn’t load the posts. Please try again later.</p>


      <Link
        href="/posts"
        className="inline-block mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        ← Back to Posts
      </Link>
    </div>
  );
}
