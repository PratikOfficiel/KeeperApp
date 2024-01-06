import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Left from "./left/Left";
import Right from "./right/Right";


function App(){

    return(
        <div className="container">
            <Header />

            <div className="content">

                <Left />

                <Right />

            </div>

            <Footer />
        </div>
    )
}

export default App;