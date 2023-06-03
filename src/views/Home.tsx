import React from "react";
import { Nav, Banner, Category, Watches, GenderBanner } from "../components";

const Home = () => {
  return (
    <main>
      <Nav />
      <Banner />
      <Category />
      <Watches />
      <GenderBanner />
      <Watches />
    </main>
  );
};

export default Home;
