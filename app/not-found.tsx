import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h2 className="text-6xl font-bold ">Not Found</h2>
      <p className="text-2xl">Could not find requested resource</p>
      <Link href="/" className="px-8 py-2 bg-primary rounded-md">Return Home</Link>
    </div>
  );
}
