import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import LogoWhite from "../assets/RINGLOGO_WHITE.webp";
import Logo from "../assets/RINGLOGO.webp";

function Navbar(props) {
    const [color, setColor] = useState(true);
    const changeColor = () => {
        if (window.scrollY >= 30) {
            setColor(false);
        } else {
            setColor(true);
        }
    };
    window.addEventListener("scroll", changeColor);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div
            className="fixed flex justify-between p-4 shadow-md z-50 flex-wrap"
            style={{
                backgroundColor: props.home ? (color ? "transparent" : "#FFFFFF") : "#FFFFFF",
                transitionDuration: "0.3s",
                boxShadow: props.home
                    ? color
                        ? "0px 0px 0px black"
                        : "5px 0px 10px black"
                    : "5px 0px 10px black",
            }}
        >
            <Link className="w-1/2" onClick={scrollToTop} to="/">
                <img src={props.home ? (color ? LogoWhite : Logo) : Logo} alt="Logo" />
            </Link>
            <ul className="flex items-center justify-between gap-3">
                <div>
                    <Link
                        style={{
                            color: props.home ? (color ? "white" : "black") : "black",
                        }}
                        onClick={scrollToTop}
                        to="/Products"
                    >
                        Produkter
                    </Link>
                </div>
                <Link
                    style={{
                        color: props.home ? (color ? "white" : "black") : "black",
                    }}
                    onClick={scrollToTop}
                    to="/Services"
                >
                    Tjenester
                </Link>
                <Link
                    style={{
                        color: props.home ? (color ? "white" : "black") : "black",
                    }}
                    onClick={scrollToTop}
                    to="/About"
                >
                    Om Oss
                </Link>
                <Link
                    style={{
                        color: props.home ? (color ? "white" : "black") : "black",
                    }}
                    onClick={scrollToTop}
                    to="/Contact"
                >
                    <Button
                        backgroundColor={props.home ? (color ? "#FFFFFF" : "#25346d") : "#25346d"}
                        textColor={props.home ? (color ? "#25346d" : "#FFFFFF") : "#FFFFFF"}
                        text="Kontakt Oss"
                        pointer={true}
                    />
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
