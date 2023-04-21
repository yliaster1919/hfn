import React, { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import Fighters from "./Fighters";
import Prices from "./Prices";
import Schedules from "./Schedules";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
function HomeIndex() {
    return (
        <main>
            <Header />
            <TopNavbar />
            <Carousel />
            <About />
            <Fighters />
            <Schedules />
            <Prices />
            <ContactUs />
            <Footer />
        </main>
    );
}

export default HomeIndex;
