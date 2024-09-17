import classNames from "classnames/bind";
import style from "./Introductory.module.scss";
import {Button, Container, Grid2, IconButton, Tooltip, Typography, Zoom} from "@mui/material";
import {MenuSocials} from "../../../../common/menus";
import {SocialItem} from "../../../../common/types";
import {Link} from "react-router-dom";
import {Send} from "lucide-react";
import images from "../../../../assets/image";
import React from "react";

const cx = classNames.bind(style);

const Introductory: React.FC = () => {
    return (
        <section id={"introductory"} className={cx("section_introductory")}>
            <Container maxWidth={"lg"}>
                <Grid2 container spacing={1}>
                    <Grid2 size={2}>
                        <div className={cx("wrapper_social")}>
                            <ul>
                                {MenuSocials.map((item: SocialItem, index: number) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={index}>
                                            <Tooltip
                                                title={<Typography>{item.title}</Typography>}
                                                arrow={true}
                                                placement={"right"}
                                                TransitionComponent={Zoom}
                                                TransitionProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <IconButton>
                                                    <Link className={cx("social_link")} to={item.path}>
                                                        <Icon size={20}/>
                                                    </Link>
                                                </IconButton>
                                            </Tooltip>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Grid2>

                    <Grid2 size={10}>
                        <div className={cx("wrapper_container")}>
                            <div className={cx("wrapper_content")}>
                                <Grid2 container spacing={2}>
                                    <Grid2 size={6}>
                                        <div className={cx("introductory_content")}>
                                            <h1 className={cx("introductory_name")}>Tr Mạnh Thắng</h1>
                                            <div style={{display: "flex", alignItems: "center", gap: "0 10px"}}>
                                                <span className={cx("service_line")}></span>
                                                <span className={cx("introductory_service")}>Web Developer</span>
                                            </div>

                                            <div className={cx("description_content")}>

                                            </div>
                                            <div className={cx("container_btn")}>
                                                <Button
                                                    variant="contained"
                                                    size="large"
                                                    endIcon={<Send size={18}/>}
                                                    sx={{
                                                        fontSize: "14px",
                                                        boxShadow: "none",
                                                        backgroundColor: "var(--primary-color)",
                                                        padding: "14px 22px",
                                                        borderRadius: "10px",
                                                    }}
                                                >
                                                    <span className={cx("title_btn")}>Say Hello</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Grid2>

                                    <Grid2 size={6}>
                                        <div className={cx("image_content")}>
                                            <div className={cx("image")} style={{backgroundImage: `url(${images.avatar})`}}>

                                            </div>
                                        </div>
                                    </Grid2>
                                </Grid2>
                            </div>

                            <div className={cx("wrapper_scroll")}>

                            </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>
        </section>
    )
}

export default Introductory;