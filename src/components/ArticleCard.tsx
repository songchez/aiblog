import { client } from "@/util/SanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
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
        <div className="group card card-compact rounded-md shadow-xl duration-300 hover:-translate-y-1 hover:translate-x-1 max-w-md h-[412px]">
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
            <h3 className="card-title font-semibold text-left">{post.title}</h3>
          </div>
          <div className="flex justify-end items-end p-4">
            <span className="text-right text-sm">
              {CreatedAt({ createdAt: post._createdAt })} • {randomInt(2000)}
              view
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
