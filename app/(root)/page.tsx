import { Suspense } from "react";
import SearchContent from "./searchContent";

export default function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent searchParams={searchParams} />
    </Suspense>
  );
}
