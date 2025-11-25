import Link from "next/link";

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top navigation (same as other pages) */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-semibold">David Piegaro</span>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="hover:text-sky-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-sky-300">
              About
            </Link>
            <Link href="/links" className="hover:text-sky-300">
              Cool Links
            </Link>
          </div>
        </div>
      </nav>

      {/* Links content */}
      <section className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-3xl font-semibold">Cool Links</h1>
        <p className="max-w-xl text-center text-slate-300">
          A few things I like to read, watch, or revisit.
        </p>
        <ul className="space-y-2 text-sky-300">
          <li>
            <a href="https://marginalrevolution.com" target="_blank" rel="noreferrer" className="hover:underline">
              Marginal Revolution
            </a>
          </li>
          <li>
            <a href="https://www.econtalk.org/" target="_blank" rel="noreferrer" className="hover:underline">
              EconTalk
            </a>
          </li>
          <li>
            <a href="https://www.thedispatch.com/" target="_blank" rel="noreferrer" className="hover:underline">
              The Dispatch
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
