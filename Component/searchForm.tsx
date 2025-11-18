"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchFormClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams?.get("query") || "");

  useEffect(() => {
    const url = query ? `/?query=${encodeURIComponent(query)}` : "/";
    router.replace(url, { scroll: false }); // replace so we don’t create history entries
  }, [query, router]);

  const handleReset = () => {
    setQuery("");
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="query"
        placeholder="Search startups"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <div className="flex gap-2">
        {query && (
          <button type="button" onClick={handleReset} className="search-btn text-white">
            <X className="size-5" />
          </button>
        )}

        {!query && (
          <button type="submit" className="search-btn text-white">
            <Search className="size-5" />
          </button>
        )}
      </div>
    </form>
  );
}
