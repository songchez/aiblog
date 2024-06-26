import Image from "next/image";
import { redirect } from "next/navigation";
import { getPost, getPostData } from "../api/blogData";
import ImageBuilder from "@/components/ImageBuilder";
import ArticleBuilder from "@/components/ArticleBuilder";
import CreatedAt from "@/components/CreatedAt";
import { Post } from "@/types/AboutPost";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post: Post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

//기본적으로 [slug]는 주소창에쓴게(라우팅) params로 전달(props)된다.
//[...slug]라고 하면 파라미터가 있든없든 페이지 나오고, 배열도(중첩라우팅) 사용가능하다.

export default async function Slug({ params: { slug } }: Props) {
  const post: Post = await getPost(slug);
  const tagLists = post.tags.split(",");
  if (!post) {
    redirect("/");
    // notFound();
  }
  return (
    <div className="flex justify-center">
      <div key={post._id} className="container px-10 w-full max-w-4xl">
        <div className="grid gap-4">
          <h1 className="pt-28 text-5xl font-bold">{post.title}</h1>
          <h4>{CreatedAt({ createdAt: post._createdAt })}</h4>
          <div className="flex flex-wrap gap-2">
            {tagLists.map((tag) => {
              return (
                <button className="badge hover:bg-primary" key={tag}>
                  {tag}
                </button>
              );
            })}
          </div>
          <Image
            src={ImageBuilder({ mainImage: post.mainImage })}
            alt={`Main image of${post.title}`}
            width={1024}
            height={1024}
          />
        </div>
        {/* 클라이언트 컴포넌트 */}
        <ArticleBuilder postBody={post.body.slice(0, 3)}></ArticleBuilder>
        <ArticleBuilder postBody={post.body.slice(4, 10)}></ArticleBuilder>
        <ArticleBuilder postBody={post.body.slice(11, 20)}></ArticleBuilder>
        <ArticleBuilder postBody={post.body.slice(21, 30)}></ArticleBuilder>
        <ArticleBuilder postBody={post.body.slice(31)}></ArticleBuilder>
      </div>
    </div>
  );
}

//원래 요청시 생성(Dynamic)되어야 하는데 미리 정적(Static)으로 생성해 놓는 함수
//상세페이지 만들때 쓰임.
//동적(ssr)으로 하느냐? 아니면 정적(ssg)으로 하느냐?
export async function generateStaticParams() {
  const posts = await getPostData("");
  return posts.map((post: Post) => ({ slug: post._id }));
}
