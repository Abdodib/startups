import StartupCard, { StartupCardType } from "@/Component/StartupCard";
import Hero from "../../Component/hero";
import { client } from "@/sanity/lib/client";
import { startups_query } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {


  const query = (await searchParams).query || '';
  const params = { search : query || null };
  const {data: posts} = await sanityFetch({query : startups_query , params});


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
    <SanityLive />
    </>
  );
}
