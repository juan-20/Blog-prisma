import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { db } from "@/lib/db";
import Image from "next/image";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

export default async function Home() {
  const post = await getPosts();
  return (
    <main className="grid items-center justify-center md:grid-cols-2 mt-10 gap-4">
      {post.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
