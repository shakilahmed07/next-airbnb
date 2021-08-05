import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SingleCard from "../components/SingleCard";
import SectionBanner from "../components/images/airbnb-section-banner.webp";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb | Lodge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Static some data from a server - API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
            {exploreData?.map(({ img, location, distance }) => (
              <SingleCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 p-3 -ml-3 overflow-scroll">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        {/* import LargeCard */}
        <LargeCard
          img={SectionBanner}
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );

  const cardData = await fetch("https://jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
