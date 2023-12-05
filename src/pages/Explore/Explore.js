import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Checkbox from "@mui/material/Checkbox";
import "./Explore.css";
import ExploreItems from "./ExploreItems";

const Explore = () => {
    const [open, setOpen] = React.useState(true);
 
    return (
        <div
            style={{
                display: "flex",
                background: "linear-gradient(147deg, #923cb5 0%, #000000 74%)",
            }}
        >
            {open ? (
                <div className="explore-drawer-open explore___drawer___open">
                    <div onClick={() => setOpen(false)} className="explore-menu-item">
                        <ArrowBackIcon fontSize="large" color="white" />
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        <Checkbox
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "white",
                                },
                            }}
                        />
                        PFP
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        <Checkbox
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "white",
                                },
                            }}
                        />
                        SKULL
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        <Checkbox
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "white",
                                },
                            }}
                        />
                        SKELETON
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        <Checkbox
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "white",
                                },
                            }}
                        />
                        BANNERS
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        <Checkbox
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "white",
                                },
                            }}
                        />
                        LANDSCAPE
                    </div>
                    <div className="explore-menu-item explore___menu___item">
                        <Checkbox
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "white",
                                },
                            }}
                        />
                        Attributes Filter
                    </div>
                </div>
            ) : (
                <div className="explore-drawer-close" onClick={() => setOpen(true)}>
                    <div className="explore-menu-item " style={{ height: "100%" }}>
                        <ArrowForwardIcon fontSize="large" />
                    </div>
                </div>
            )}
            <ExploreItems />
        </div>
    );
};

export default Explore;
