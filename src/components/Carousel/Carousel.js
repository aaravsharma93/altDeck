import React from "react";
import Container from "@mui/material/Container";
import Slideshow from "./Slideshow";
import Astro from "../../assets/astro.png";
import Collection from "../../assets/collection.png";
import "./Carousel.css";

const data = [
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
    },
];

const Carousel = () => {
    return (
        <Container>
            <h1>
                <b>New Collections 🚀</b>
            </h1>
            <Slideshow show={3}>
                {data.map((item) => {
                    return (
                        <div>
                            <div style={{ padding: 8 }}>
                                <img
                                    src={item.img}
                                    alt="placeholder"
                                    style={{ width: "100%", borderRadius: "12px" }}
                                />
                                <div
                                    style={{
                                        textAlign: "center",
                                        backgroundColor: "purple",
                                        borderRadius: "12px",
                                        color: "white",
                                        marginTop: "-15px",
                                        padding: "10px 0",
                                    }}
                                >
                                    <img className="hot-boxes-logo" src={Astro} />
                                    <h3 style={{ color: "white", textAlign: "center" }}>
                                        {item.head}
                                    </h3>
                                    <span style={{ color: "white", textAlign: "center" }}>
                                        {item.para}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div>
                    <div style={{ padding: 8 }}>
                        <img
                            src="https://via.placeholder.com/300x300"
                            alt="placeholder"
                            style={{ width: "100%" }}
                        />
                        <div
                            style={{
                                textAlign: "center",
                                backgroundColor: "purple",
                                color: "white",
                                padding: "10px 0",
                            }}
                        >
                            TEXT HERE
                        </div>
                    </div>
                </div>
            </Slideshow>
        </Container>
    );
};

export default Carousel;
