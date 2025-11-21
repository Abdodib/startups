import StartupCard, { StartupCardType } from "@/Component/StartupCard";
import Hero from "../../Component/hero";
import { client } from "@/sanity/lib/client";
import { startups_query } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const params = await searchParams; // unwrap the promise
  const query = params?.query || '';
  const posts = await client.fetch(startups_query);
  
 /* const posts  = [
    {
      _createdAt: new Date(),
      views : 55,
      author : { _id:1, name: 'brian' },
      _id : 1,
      description : 'This is a sample description',
      image : '/logo.png',
      category : 'robot',
      title : 'we robot'
    },
  ];*/
  return (
    <>
      <Hero
        black="pitch your startup, <br/> connect with Entrepreneurs."
        white="submit ideas , vote on pitches , and get noticed in vertical competitions."
        isSearch={true}
      />

      <section className="section-container">
        <p className="text-30-semibold ml-2 mt-2">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className=" grid m-7">
          {
            posts.length > 0 ? (
              posts.map((post : StartupCardType ) => (
                <StartupCard key={post?._id} post= {post} />
              ))
            ) : (
              <p className="no-result">No startups found.</p>
            )
          }
        </ul>

      </section>
    </>
  );
}
