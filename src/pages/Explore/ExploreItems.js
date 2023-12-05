import React from "react";
import Collection from "../../assets/collection.png";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const datas = [
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

const ExploreItems = () => {
    return (
        <div className="explore___items">
            {datas.map((data, idx) => (
                <Link to={"/explore"}>
                    <div style={{ display: "flex" }}>
                        <div className="hot-box explore___item">
                            <img
                                className="hot-boxes-img"
                                src={data.img}
                                style={{ borderRadius: "20px" }}
                            />
                            <img className="hot-boxes-logo" src={data.img} />
                            <h3 style={{ color: "white", textAlign: "center" }}>{data.head}</h3>
                            <span style={{ color: "white", textAlign: "center" }}>{data.para}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ExploreItems;
