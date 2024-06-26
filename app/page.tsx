import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/Components";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore the cars you might like </p>
        </div>
        <div className="home_filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
