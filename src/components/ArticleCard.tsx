import { client } from "@/util/SanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
import HeartIcon from "/public/icon_heart.svg";
import { randomInt } from "crypto";
import { Post } from "@/types/AboutPost";

export default async function ArticleCard({ post }: { post: Post }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <div>
      <Link href={`/${post._id}`}>
        <div className="group card card-compact bg-base-100 shadow-xl hover:translate-y-1 max-w-md h-[412px]">
          <figure className="w-fit">
            <div className="h-52 overflow-hidden">
              <Image
                alt={post._id}
                src={urlFor(post.mainImage).url()}
                width={500}
                height={500}
                className="bg-cover"
              />
            </div>
          </figure>
          <div className="card-body overflow-hidden">
            <h3 className="font-semibold text-left card-title">{post.title}</h3>
            <p className="truncate text-gray-500 ">
              {post.body[0].children[0].text}
            </p>
            <div className="flex justify-between">
              <span className="text-left text-sm">
                {CreatedAt({ createdAt: post._createdAt })} • {randomInt(2000)}
                view
              </span>
              <button>
                <Image src={HeartIcon} alt="hearticon"></Image>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
