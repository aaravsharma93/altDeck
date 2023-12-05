import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./Sell.css";

const Profile = () => {
    return (
        <div className="sell_outermost">
            <Container>
                <h1 style={{ color: "white" , margin:"0"}}>Your NFTs/collections for sale</h1>
                <div className="sell_outer_container">
                    Connect your wallet to sell NFTs
                    <Button variant="contained" style={{ width: "200px", fontSize: "large" }}>
                        Connect Wallet
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Profile;
