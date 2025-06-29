import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export const metadata = {
  title: "All Posts |Buguard Blog ",
  description: "Paginated list of blog posts",
};

const POSTS_PER_PAGE = 20;

export default async function PostsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || "1");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts.");

  const allPosts: Post[] = await res.json();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = allPosts.slice(start, end);

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

      
      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
        {/* previous button*/}
        {page > 1 && (
          <Link
            href={`/posts?page=${page - 1}`}
            className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            ← Prev
          </Link>
        )}

        {/* numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/posts?page=${i + 1}`}
            className={`px-4 py-2 rounded border ${
              i + 1 === page
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            } transition`}
          >
            {i + 1}
          </Link>
        ))}

        {/* next button*/}
        {page < totalPages && (
          <Link
            href={`/posts?page=${page + 1}`}
            className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Next →
          </Link>
        )}
        
      </div>
    </main>
  );
}

