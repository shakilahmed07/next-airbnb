import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`} />
      {/* Search Main section */}
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-xs">
            200+ Stays {range} for {noOfGuest} Guests
          </p>
          <h1 className="text-3xl font-semibold">Stays in {location}</h1>

          <div className="hidden lg:inline-flex my-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility </p>
            <p className="button">Type of Place </p>
            <p className="button">Price </p>
            <p className="button">Rooms and Beds </p>
            <p className="button">More filters </p>
          </div>

          <div>
            {searchResult.map(
              ({ img, location, title, star, price, total, description }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  star={star}
                  price={price}
                  total={total}
                  description={description}
                />
              )
            )}
          </div>
        </section>

        {/* MapBox Section */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
