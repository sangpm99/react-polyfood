import React from 'react';
import TopBar from "../../components/TopBar";
import {useLocation} from "react-router-dom";
import Banner from "./components/Banner";
import Header from "../../components/Header";
import GapHeader from "../../components/GapHeader";
import Category from "./components/Category";
import GridBanner from "./components/GridBanner";
import BestSellers from "./components/BestSellers";
import WhyUs from "../components/WhyUs";
import Footer from "../../components/Footer";
import NewProducts from "./components/NewProducts";
import Deal from "./components/Deal";
import Testimonial from "./components/Testimonial";

function Home() {
    const { state } = useLocation();
    return (
        <div id="home">
            <TopBar/>
            <Header
                props={
                    state && (state.props.position || "guest")
                }
            />
            <GapHeader />
            <Banner />
            <Category />
            <GridBanner />
            <BestSellers />
            <WhyUs />
            <NewProducts />
            <Deal />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default Home;