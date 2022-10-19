import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {exploreData?.map((item) => {
              return (
                <SmallCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                />
              );
            })}
          </div>
        </section>
      </main>
      <section>
        <h1>Live Anywhere</h1>
      </section>
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    props: { exploreData },
  };
}
