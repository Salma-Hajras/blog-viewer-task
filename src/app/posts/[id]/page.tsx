import { Metadata } from "next";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Params {
  params: { id: string };
}

//  SEO Metadata
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post: Post = await res.json();

    return {
      title: `${post.title} | Blog Viewer`,
      description: post.body?.slice(0, 150) || "Blog post details",
    };
  } catch {
    return {
      title: "Post Not Found | Blog Viewer",
      description: "The blog post could not be loaded.",
    };
  }
}

// Post Details Page
export default async function PostDetails({ params }: Params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    return (
      <div className="p-8 max-w-xl mx-auto bg-white rounded shadow text-center text-red-700 space-y-4 mt-10">
        <h2 className="text-2xl font-bold">404 - Post Not Found</h2>
        <p className="text-gray-600">The post you're looking for doesn't exist.</p>
        <Link
          href="/posts"
          className="inline-block mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          ← Back to Posts
        </Link>
      </div>
    );
  }

  const post: Post = await res.json();

  return (
    <div className="animate-fadeIn bg-white shadow-md rounded p-6 space-y-6 max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-black">{post.title}</h1>
      <p className="text-gray-800 leading-relaxed">{post.body}</p>

      <footer className="pt-4 border-t mt-8 text-right">
        <Link
          href="/posts"
          className="inline-block text-black hover:underline transition font-medium"
        >
          ← Back to Posts
        </Link>
      </footer>
    </div>
  );
}

