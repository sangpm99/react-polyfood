import React from 'react';
import TopBar from "../TopBar";
import Header from "../Header";
import GapHeader from "../GapHeader";
import Footer from "../Footer";

function PageDefault({children}) {
    return (
        <div className="relative">
            <TopBar />
            <Header />
            <GapHeader />
            {children}
            <Footer />
        </div>
    );
}

export default PageDefault;