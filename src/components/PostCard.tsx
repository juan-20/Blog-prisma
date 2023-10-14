import { Tag } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const { title, content, tag } = post;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions">
          <div className="badge badge-primary badge-outline">{tag.name}</div>
          <button className="hover:underline btn btn-info">
            <Link href={`/post/${post.id}`}>Read more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
