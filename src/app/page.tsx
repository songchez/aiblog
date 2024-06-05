import PostCard from "../components/PostCard";
import { getPostData } from "./api/blogData";
import dynamic from "next/dynamic";

const FirstPost = dynamic(() => import("../components/PostCard"));

export default async function Home() {
  const firstposts = await getPostData("[0..5]");
  const posts = await getPostData("[6..100]");

  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col items-start text-center mt-5 max-w-6xl">
        <h2 className="text-xl pl-3">The Best</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-5xl">
          {/* 처음 6개뽑고 */}
          <PostCard posts={firstposts} />
        </div>
        <h2 className="text-xl pl-3 pt-5">For Your Wellness</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-5xl">
          {/* 그 다음 뽑고 */}
          <FirstPost posts={posts} />
        </div>
      </div>
    </main>
  );
}
