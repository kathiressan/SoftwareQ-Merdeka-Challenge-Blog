import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import { FullPost } from "../../components/FullPost";
import Header from "../../components/Header";
import { selectMode } from "../../slices/darkmodeSlice";
import Head from "next/head";

export default function Blog({ post }) {
  const getMode = useSelector(selectMode);
  return (
    <>
      <Head>
        <title>Kathi's Blog</title>
      </Head>
      <div
        className={`min-h-screen ${
          getMode
            ? "dark bg-[#222222] darkModeTransition"
            : "light darkModeTransition"
        }`}
      >
        <div className="relative">
          {/* Header */}
          <Header />
          {/* Banner */}
          <Banner />
        </div>
        <FullPost post={post} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const post = await fetch(
    `https://softwareq-merdeka-api.azure-api.net/blog/v1/ById?Id=${id}&softwareq-apim-subscription-key=83e35563f945461db33146d8c43abb2a`
  ).then((res) => res.json());

  return {
    props: {
      post,
    },
  };
}
