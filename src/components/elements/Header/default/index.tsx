import classNames from "classnames/bind";
import style from "./HeaderDefault.module.scss";
import React from "react";

const cx = classNames.bind(style);
// interface Props {
//
// }

const HeaderDefault: React.FC = () => {

    return(
        <h1 className={cx("")}>Header</h1>
    )
}

export default HeaderDefault;