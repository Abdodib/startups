import Hero from "../Component/hero";

export default function Home() {
  return (
    <>
      <Hero
        black="pitch your startup, <br/> connect with Entrepreneurs."
        white="submit ideas , vote on pitches , and get noticed in vertual compititions."
        isSearch={true}
      />
    </>
  );
}
