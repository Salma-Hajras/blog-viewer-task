import { Metadata } from "next";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface PageProps {
  params: {
    id: string;
  };
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

//  Post Details Page
export default async function PostDetails({ params }: PageProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    return (
      <div className="p-8 bg-white rounded shadow text-center text-red-600 space-y-4">
        <h2 className="text-2xl font-bold">404 - Post Not Found</h2>
        <p className="text-gray-600">The post you are looking for does not exist.</p>
        <Link
          href="/posts"
          className="inline-block text-blue-500 hover:underline font-medium"
        >
          ← Back to Posts
        </Link>
      </div>
    );
  }

  const post: Post = await res.json();

  return (
    <div className="animate-fadeIn bg-white shadow-md rounded p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">{post.title}</h1>
      <p className="text-gray-800 leading-relaxed">{post.body}</p>

      <footer className="pt-4 border-t mt-8 text-right">
        <Link
          href="/posts"
          className="inline-block text-blue-500 hover:text-blue-700 transition font-medium"
        >
          ← Back to Posts
        </Link>
      </footer>
    </div>
  );
}
