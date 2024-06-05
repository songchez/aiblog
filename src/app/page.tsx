import ArticleCard from "@/components/ArticleCard";
import { getPostData } from "./api/blogData";
import { Post } from "@/types/AboutPost";
import dynamic from "next/dynamic";

const FirstPost = dynamic(() => import("../components/LazyPostCard"));

export default async function Home() {
  const firstposts = await getPostData("[0..5]");
  const posts = await getPostData("[6..100]");

  return (
    <main className="flex justify-center items-center">
      <div className="flex justify-center items-center text-center mt-5 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-5xl">
          {firstposts.map((post: Post) => {
            return (
              <div key={post._id}>
                {/* @ts-expect-error Async Server Component */}
                <ArticleCard post={post} />
              </div>
            );
          })}
          <FirstPost posts={posts} />
        </div>
      </div>
    </main>
  );
}
