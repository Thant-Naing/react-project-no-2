import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import NavBar from "./NavBar";
import MainNavBar from "./MainNavBar";
import Slider from "./Slider";
import ScrollNav from "./ScrollNav";
import BookingForm from "./BookingForm";
import About from "./About";
import Treatment from "./Treatment";
import { CarouselSpacing } from "./CarouselSpacing";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <div className=" ">
        {/* <Layout>
          <NavBar />
        </Layout> */}
        {/* <MainNavBar/> */}

        <Slider />

       

        <BookingForm />

        <About />

        <Treatment/>

        <CarouselSpacing/>
      </div>
    </>
  );
};

export default Home;
