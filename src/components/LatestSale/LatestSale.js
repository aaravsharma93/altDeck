import React from "react";
import Collection from "../../assets/collection2.png";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const datas = [
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated...",
        price: "1 sol",
    },
];

const Hot = () => {
    return (
        <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
            <div className="hot_container">
                <h1>Latest Sale 🌟</h1>
                <div className="hot_boxes_container">
                    {datas.map((data, idx) => (
                        <div className="hot_box">
                            <img src={data.img} width="100%" style={{ borderRadius: "20px" }} />
                            <Link to={`/profile/${idx + 1}`}>
                                <h3 style={{ color: "#251552", textAlign: "center" }}>
                                    {data.head}
                                </h3>
                                <span style={{ textAlign: "center", display: "flex" }}>
                                    {data.para}
                                </span>
                            </Link>
                            <div
                                className="Sale_button"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {data.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Hot;
