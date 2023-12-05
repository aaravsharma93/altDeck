import React from "react";
import Collection from "../../assets/collection.png";
import Favourite from "./Favourite/Favourite";
import Slideshow from "../../components/Carousel/Slideshow";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

import "./Hot.css";

const datas = [
    {
        head: "Solona Bananas",
        img: Collection,
        para: "1500 Fruity, Unique, Algorithmically generated... 1500 Fruity, Unique, Algorithmically generated..",
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

const getCardNumbers = () => {
    if (window.innerWidth <= 968 && window.innerWidth >= 685) {
        return 2;
    } else if (window.innerWidth <= 685) {
        return 1;
    } else {
        return 3;
    }
};

const Hot = () => {
    const [cardNumber, setCardNumber] = React.useState(getCardNumbers());

    window.onresize = () => {
        if (window.innerWidth <= 968 && window.innerWidth >= 685) {
            setCardNumber(2);
        } else if (window.innerWidth <= 685) {
            setCardNumber(1);
        } else {
            setCardNumber(3);
        }
    };

    return (
        <Container>
            <h1>
                <b>New Collections 🚀</b>
            </h1>
            <Slideshow show={cardNumber}>
                {datas.map((data, idx) => (
                    <Link to={"/explore"}>
                        <div style={{ display: "flex" }}>
                            <div className="hot-box">
                                <img
                                    className="hot-boxes-img"
                                    src={data.img}
                                    style={{ borderRadius: "20px" }}
                                />
                                <img className="hot-boxes-logo" src={data.img} />
                                <h3 style={{ color: "white", textAlign: "center" }}>{data.head}</h3>
                                <span style={{ color: "white", textAlign: "center" }}>
                                    {data.para}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slideshow>
        </Container>
    );
};

export default Hot;
