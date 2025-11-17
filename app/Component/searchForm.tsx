// SearchFormClient.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SearchFormClient() {
  const [query, setQuery] = useState("");

  const handleReset = () => setQuery("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search submitted:", query);
    // optionally call server action here
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
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
        <button type="button"  onClick={handleReset}>
          <Link href="/" className="search-btn text-white">
            ✕
          </Link>
        </button>
      )}
      {
        !query && (
      <button type="submit" className="search-btn text-white">
        S
      </button>
        )
      }
      </div>
    </form>
  );
}
