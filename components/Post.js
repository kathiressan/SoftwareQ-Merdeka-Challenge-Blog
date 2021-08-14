import Image from "next/image";
import { LockClosedIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useAlert } from "react-alert";

export default function Post({
  id,
  title,
  createdAt,
  createdAtDateTimeOffset,
  createdBy,
  mainAuthor,
  secondaryAuthor,
  otherAuthors,
  content,
  img,
  copyrightOwner,
  isPublished,
}) {
  // const [isOpen, setIsOpen] = useState(true);
  const alert = useAlert();
  const router = useRouter();
  createdAt = new Date(createdAt);

  return (
    <div
      onClick={() =>
        isPublished
          ? router.push(`blog/${id}`)
          : alert.show("That post has not been published yet!")
      }
      className="hover:scale-[1.02] transition duration-200 ease-out active:scale-[.98]"
    >
      <Zoom>
        <div className="border cursor-pointer shadow-lg rounded-xl flex flex-col sm:flex-row dark:bg-[#e0e0e0] darkModeTransition">
          {/* Image */}
          <div className="p-4 sm:border-r dark:border-r-[#757575] w-[250px] mx-auto sm:mx-0 darkModeTransition">
            <Image src={img} height={150} width={300} objectFit="contain" />
          </div>
          {/* Content */}
          <div className="border-t sm:border-t-0 p-4">
            {/* Top Content */}
            <div>
              <div className="text-center text-xl mb-2 sm:text-left md:text-2xl">
                {title}
              </div>
              <div className="text-sm mb-4 md:text-base text-gray-600">{`${createdBy} - ${createdAt.getDate()}/${
                createdAt.getMonth() + 1
              }/${createdAt.getFullYear()}`}</div>
            </div>
            {/* Center Content */}
            <div>{isPublished ? 
            content     
            :
            "This post has yet to be published. Contact the author for more information."
            }</div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
