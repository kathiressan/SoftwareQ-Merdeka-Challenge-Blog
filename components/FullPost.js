import Image from "next/image";
import { useRouter } from "next/router";
import Bounce from "react-reveal/Bounce";

export const FullPost = ({ post }) => {
  const router = useRouter();
  let createdAt = null;

  if (post?.createdAt) {
    createdAt = new Date(post?.createdAt);
  }

  return (
    // Whole body
    <main className="p-5 w-full max-w-[1000px] mx-auto flex mt-10">
      <Bounce>
        {/* Wrap around Post */}
        <div className="mx-auto 2xl:min-w-[1000px] bg-blue-50 p-3 rounded-xl shadow-lg dark:bg-[#e0e0e0] dark:border-[#212121] darkModeTransition">
          {/* Top part */}
          <div>
            <div className="text-center pb-8 text-2xl sm:text-3xl md:text-5xl">
              {post?.title}
            </div>
            <div className="text-center pb-10">
              {post?.linkToHeaderImage && (
                <Image
                  src={post.linkToHeaderImage}
                  width={600}
                  height={300}
                  objectFit="contain"
                />
              )}
            </div>
            <div className="mb-10 text-gray-700">{`${
              post?.createdBy
            } - ${createdAt.getDate()}/${
              createdAt.getMonth() + 1
            }/${createdAt.getFullYear()}`}</div>
          </div>

          {/* Bottom part */}
          <div className="mb-6">{post?.content}</div>

          <button
            onClick={() => router.push("/")}
            className="bg-white hover:bg-blue-500 border hover:border-blue-500 rounded-lg p-2  transition duration-200 ease-out hover:text-white active:scale-105 shadow-md dark:hover:bg-black dark:hover:text-white dark:hover:border-black darkModeTransition"
          >
            View All Posts
          </button>
        </div>
      </Bounce>
    </main>
  );
};
