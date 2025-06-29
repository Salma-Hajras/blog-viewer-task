"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

export default function PostsPageClient({ posts, currentPage, totalPages }: Props) {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page"); 
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageParam]); 

  return (
    <main className="px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center text-black">All Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded shadow hover:shadow-xl transition-all duration-300 bg-white group transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold group-hover:text-black transition">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-black hover:underline inline-block mt-4"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/*  Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
        {currentPage > 1 && (
          <Link
            href={`/posts?page=${currentPage - 1}`}
            className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            ← Prev
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/posts?page=${i + 1}`}
            className={`px-4 py-2 rounded border ${
              i + 1 === currentPage
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            } transition`}
          >
            {i + 1}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link
            href={`/posts?page=${currentPage + 1}`}
            className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Next →
          </Link>
        )}
      </div>
    </main>
  );
}
