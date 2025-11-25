import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-950 text-slate-50">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-semibold">
          Hi, I&apos;m David 👋
        </h1>
        <p className="max-w-xl text-center text-slate-300">
          This is my very first personal site running on Next.js. I&apos;m using it to learn my new Mac
          dev setup, Git, GitHub, and modern web tools.
        </p>
      </div>

      <Image
        src="/david.jpg"
        alt="David Piegaro"
        width={200}
        height={200}
        className="rounded-full object-cover"
      />
    </main>
  );
}
