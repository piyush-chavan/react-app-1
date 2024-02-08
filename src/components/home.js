import React from "react";
import "./home.css";
import HomeCorousal from "./homeCorousal";
import HomeTitlebox from "./homeTitlebox";
import List from "./list";

function Home(){

    

    return (
        <>
        <div id="gfg">
            <HomeTitlebox/>
            <HomeCorousal/>
            <List/>
        </div>
        </>
    );

}

export default Home;