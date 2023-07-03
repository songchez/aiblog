import React from "react";
import Meow from "@/components/MeowArtcle";

export const metadata = {
  title: "Product",
  description: "산체스의 넥스트 스터디의 상품페이지입니다",
};

//ISR. 몇초간격으로 랜더링 할래?????
// export const revalidate = 4; -> 밑에 객체형태로 집어넣음.

export default async function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="container max-w-4xl">
        <div className="p-8">
          <Meow></Meow>
        </div>
        {children}
      </div>
    </div>
  );
}
