import Post from "./Post";
import { useState } from "react";

export default function MainPage({ posts }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="p-5 w-full max-w-[1000px] mx-auto">
      <div className="text-4xl font-semibold mb-7 dark:text-white">Posts</div>
      <div className="space-y-5">
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            createdAt={post.createdAt}
            createdAtDateTimeOffset={post.createdAtDateTimeOffset}
            createdBy={post.createdBy}
            mainAuthor={post.mainAuthor}
            secondaryAuthor={post.secondaryAuthor}
            otherAuthors={post.otherAuthors}
            content={post.content}
            img={post.linkToHeaderImage}
            copyrightOwner={post.copyrightOwner}
            isPublished={post.isPublished}
          />
        ))}
        {/* 
        <button className="bg-white hover:bg-blue-500 border hover:border-blue-500 rounded-lg p-4 ml-[50%] mt-[50%] translate-x-[-50%] transition duration-200 ease-out hover:text-white active:scale-105 shadow-md dark:hover:bg-black dark:hover:text-white dark:hover:border-black darkModeTransition">
          View All Posts
        </button> */}
      </div>
    </main>
  );
}
