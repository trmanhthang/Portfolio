import "./GlobalStyle.scss"
import React from "react";

interface Props {
    children: React.ReactNode,
}

const GlobalStyle: React.FC<Props> = (props: Props) => {
    return props.children;
}

export default GlobalStyle;