
import {FooterDefault} from "../elements/Footer";
import React, {ReactNode} from "react";
import {HeaderDefault} from "../elements/Header";

interface Props {
    children: ReactNode
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
    return(
        <>
            <HeaderDefault/>

            <div className={"container"}>
                { props.children }
            </div>

            <FooterDefault/>
        </>
    )
}

export default DefaultLayout;