import PostsPageClient from "./posts/PostsPageClient";

type Post = {
  id: number;
  title: string;
  body: string;
};

const POSTS_PER_PAGE = 20;

export default async function PostsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || "1");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts: Post[] = await res.json();

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = allPosts.slice(start, end);

  return (
    <PostsPageClient posts={posts} currentPage={page} totalPages={totalPages} />
  );
}
