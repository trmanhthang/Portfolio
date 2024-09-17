import classNames from "classnames/bind";
import style from "./HeaderDefault.module.scss";
import React from "react";
import {Container, Grid2} from "@mui/material";
import {Link} from "react-router-dom";
import Menu from "../../Menu";
import {MenuItem} from "../../../../common/types";

const cx = classNames.bind(style);

const HeaderDefault: React.FC = () => {
    const menu: MenuItem[] = [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Skills", path: "/skills"},
        {title: "Services", path: "/services"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"},
    ]

    return (
        <header className={cx("header")}>
            <Container maxWidth={"lg"}>
                <div className={cx("content")}>
                    <Grid2 container spacing={1}>
                        <Grid2 size={6}>
                            <Link to={"/"}>
                                <span className={cx("logo_text")}>ZteeBoss</span>
                            </Link>
                        </Grid2>

                        <Grid2 size={6}>
                            <div className={cx("container")}>
                                <Menu direction={true} data={menu}/>
                            </div>
                        </Grid2>
                    </Grid2>
                </div>
            </Container>
        </header>
    )
}

export default HeaderDefault;