import classNames from "classnames/bind";
import style from "./About.module.scss";
import React from "react";
import {Container} from "@mui/material";

const cx = classNames.bind(style);

const About: React.FC = () => {
    return(
        <section id={"about"} className={cx("section_about")}>
            <Container maxWidth={"lg"}>
                <div className={cx("header_section")}>
                    <h1>About Me</h1>
                    <p>My Introduction</p>
                </div>
            </Container>
        </section>
    )
}

export default About;