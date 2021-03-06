import Head from "next/head";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import { selectMode } from "../slices/darkmodeSlice";

export default function Home({ posts }) {
  const getMode = useSelector(selectMode);
  return (
    <div
      className={`${
        getMode
          ? "dark bg-[#222222] darkModeTransition"
          : "light darkModeTransition"
      }`}
    >
      <Head>
        <title>Kathi's Blog</title>
      </Head>
      <div className="relative">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
      </div>
      {/* MainPage */}
      <MainPage posts={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await fetch(
    `https://softwareq-merdeka-api.azure-api.net/blog/v1/ListAll?softwareq-apim-subscription-key=${process.env.SOFTWAREQ_SECRET_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      posts,
    },
  };
}
