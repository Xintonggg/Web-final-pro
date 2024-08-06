import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white items-center justify-center min-h-screen">
      <div className="text-center">
        <img src="/laptop.jpg" alt="Description of the image" className="mb-4 mx-auto" />
        <h1 className="text-black text-4xl">Welcome to TOP TRADINGS</h1>
        <li className="text-blue-400 text-2xl">
          <Link href= {"./homepage/"}>Go To Homepage</Link>
        </li>
      </div>
    </main>
  );
}