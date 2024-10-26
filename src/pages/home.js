import Footer from "../components/footer";
import Header from "../components/header";
import Info from "../components/info";
import Main from "../components/main";
import Nav from "../components/nav";
import React from "react";
import Testimonials from "../components/testimonials";

const Home = () => {
  return (
    <div>
        <Nav/>
        <Header/>
      <Main/>
     <Testimonials/>
     <Info/>
     <Footer/>
    </div>
  )
}

export default Home;
