import { Suspense } from "react";
import Navbar from "../../Component/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      {children}
    </main>
  );
}
