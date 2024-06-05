import { client } from "@/util/SanityClient";

export async function getPostData(quantity: string) {
  const posts = await client.fetch(`*[_type == "post"]${quantity}`);
  if (posts === null) {
    throw new Error("포스트 데이터를 가져오는데 실패!");
  }
  return posts;
}

export async function getPost(id: string) {
  const posts = await getPostData("");
  return posts.find((post: any) => post._id === id);
}
