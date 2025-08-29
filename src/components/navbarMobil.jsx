import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

export const NavbarMobil = (props) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const [isScrolled, setisScrolled] = useState(true);

    const checkScroll = () => {
        if (window.scrollY >= 460) {
            setisScrolled(false);
        } else {
            setisScrolled(true);
        }
    };

    window.addEventListener("scroll", checkScroll);

    const NavMobilStyling = {
        burgerIcon: {
            margin: "3% 3%",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
        },

        DropdownStyling: {
            backgroundColor: "#FFFFFF",
            padding: "0.5rem 0.5rem",
            width: "60%",
            marginTop: "3%",
            borderRadius: "5%",
        },

        DropdownLinks: {
            color: "#25346d",
            textDecoration: "none",
            marginLeft: "0%",
            paddingLeft: "10%",
        },

        Understreker: {
            margin: "3% 3%",
        },
    };

    console.log(isScrolled);

    return (
        <div className="fixed flex justify-between">
            <div>
                {isScrolled && (
                    <img
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/ring-kjol-og-frys.appspot.com/o/RINGLOGO_WHITE.webp?alt=media&token=bd0c5a52-696b-4637-a59f-e96d822185fc"
                        }
                        alt={"Logo"}
                        className="w-1/2 m-2"
                        style={{
                            color: props.home ? (isScrolled ? "#FFFFFF" : "#25346d") : "#25346d",
                        }}
                    />
                )}
            </div>
            <div>
                <Hamburger
                    size={"35"}
                    color={props.home ? (isScrolled ? "#FFFFFF" : "#25346d") : "#25346d"}
                    className="flex self-end m-4"
                    onToggle={() => setDropdownVisible(dropdownVisible ? false : true)}
                />
            </div>

            {dropdownVisible && (
                <div style={NavMobilStyling.DropdownStyling}>
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/">
                        Hjem
                    </Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link
                        style={NavMobilStyling.DropdownLinks}
                        onClick={scrollToTop}
                        to="/Products"
                    >
                        Produkter
                    </Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link
                        style={NavMobilStyling.DropdownLinks}
                        onClick={scrollToTop}
                        to="/Services"
                    >
                        Tjenester
                    </Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/About">
                        Om oss
                    </Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/Contact">
                        Kontakt Oss
                    </Link>
                </div>
            )}
        </div>
    );
};
