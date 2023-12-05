import React, { useState, useEffect } from "react";

import Button from "../../Button/Button";

import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { NavDropdown } from "react-bootstrap";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Web = ({ expanded }) => {
    const [theme, setTheme] = useState("light.css");

    useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = theme;

        head.appendChild(link);

        return () => {
            head.removeChild(link);
        };
    }, [theme]);

    const handleChange = (e) => {
        if (e.target.checked) setTheme("dark.css");
        else setTheme("light.css");
    };
    return (
        <ul
            className={expanded ? "menu" : "menu menu-not-opened"}
            style={{ display: "flex", alignItems: "center" }}
        >
            <li>
                <Link className="navbar__link">
                    <NavDropdown
                        title="Browse"
                        id="select___navbar___main"
                        className="select___navbar___main"
                    >
                        <NavDropdown.Item as={Link} to="/stats" style={{ paddingTop: "20px" }}>
                            Stats
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/collections">
                            Collections
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/launchpad">
                            Launchpad
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/explore">
                            Explore
                        </NavDropdown.Item>
                    </NavDropdown>
                </Link>
            </li>

            <li>
                <Link className="navbar__link" to="/sell" activeStyle={{ fontWeight: "bold" }}>
                    Sell
                </Link>
            </li>
            <li>
                <Link className="navbar__link" to="/profile" activeStyle={{ fontWeight: "bold" }}>
                    Profile
                </Link>
            </li>
            <li>
                <Link className="navbar__link" activeStyle={{ fontWeight: "bold" }}>
                    <NavDropdown
                        title="Community"
                        id="select___navbar___main"
                        className="select___navbar___main"
                    >
                        <NavDropdown.Item as={Link} to="/" style={{ paddingTop: "20px" }}>
                            Twitter
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">
                            Medium
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">
                            Email
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">
                            Discord
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">
                            Telegram
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/faqs">
                            FAQ
                        </NavDropdown.Item>
                    </NavDropdown>
                </Link>
            </li>
            <li>
                <Button />
            </li>
            <li>
                <Switch {...label} onChange={handleChange} />
            </li>
        </ul>
    );
};

export default Web;
