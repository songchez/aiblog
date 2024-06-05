import { Post } from "@/types/AboutPost";
import ArticleCard from "./ArticleCard";

export default function PostCard({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post: Post) => {
        return (
          <div key={post._id}>
            {/* @ts-expect-error Async Server Component */}
            <ArticleCard post={post} />
          </div>
        );
      })}
    </>
  );
}
