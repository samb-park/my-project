import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
