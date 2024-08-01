import React from "react";
import Header from "../../components/header/Header1.jsx";
import Nav from "../../components/header/Nav.jsx";
import Carouse from "../../components/carousel/Carouse.jsx";
import HomeCategory from "../../components/home-cards/HomeCategory.jsx";
import Footer from "../../components/footer/Footer.jsx";
function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Carouse/>
      <HomeCategory/>
      <Footer/>
    </>
  );
}

export default Home;
