import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px]">
      <Image
        src="/images/banner/bannerimg.jpg"
        layout="fill"
        objectFit="cover"
        className="w-100"
      />
    </div>
  );
}
