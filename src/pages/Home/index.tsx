import classNames from "classnames/bind";
import style from "./Home.module.scss";

const cx = classNames.bind(style);

function Home() {

    return(
        <h3 className={cx("")}>Home Page</h3>
    )
}

export default Home;