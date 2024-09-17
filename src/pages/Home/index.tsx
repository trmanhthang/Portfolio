import classNames from "classnames/bind";
import style from "./Home.module.scss";
import React from "react";
import Introductory from "./sections/Introductory";
import About from "./sections/About";

const cx = classNames.bind(style);

const Home: React.FC = () => {

    return (
        <div className={cx("body")}>
            <Introductory />

            <About />
        </div>
    )
}

export default Home;