export const metadata = {
  title: "Fun",
  description: "Funny Place",
};

//ISR. 몇초간격으로 랜더링 할래?????
// export const revalidate = 4; -> 밑에 객체형태로 집어넣음.

export default async function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container flex justify-center">{children}</div>;
}
