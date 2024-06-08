import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center ">
        <h1 className="text-9xl font-extrabold tracking-widest">
          404
        </h1>
        <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <Link href={"/"} className="relative inline-block text-sm font-medium text-primary group active:text-primary focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Home
            </span>
          </Link>
        </button>
      </main>
    </div>
  );
}
