import classNames from "classnames/bind";
import style from "./FooterDefault.module.scss";
import React from "react";

const cx = classNames.bind(style);

const FooterDefault: React.FC = () => {
    return(
        <h1 className={cx("")}>Footer</h1>
    )
}

export default FooterDefault;