import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import React from "react";
import {Link} from "react-router-dom";
import {MenuItem} from "../../../common/types";

const cx = classNames.bind(style);

interface Props {
    data: MenuItem[],
    direction: boolean,
}

const Menu: React.FC<Props> = (props: Props) => {
    return (
        <ul className={cx("navigation")}>
            {props.data.map((item: MenuItem, index: number) => {
                return (
                    <li className={cx("navigation_item", {direction: props.direction})} key={index}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu;