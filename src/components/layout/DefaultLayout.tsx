import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";

import {FooterDefault} from "../elements/Footer";
import React, {ReactNode} from "react";
import {HeaderDefault} from "../elements/Header";

const cx = classNames.bind(style);

interface Props {
    children: ReactNode
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
    return(
        <>
            <HeaderDefault/>

            <div className={cx("container")}>
                { props.children }
            </div>

            <FooterDefault/>
        </>
    )
}

export default DefaultLayout;