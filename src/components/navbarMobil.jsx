import { useState } from "react"
import { Link } from "react-router-dom"
import Hamburger from 'hamburger-react'

export const NavbarMobil = (props) => {

    const [dropdownVisible, setDropdownVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [color, setColor] = useState(true)

    const changeColor = () => {
      if (window.scrollY >= 460) {
        setColor(false)
      } else {
        setColor(true)
      }
    }

    window.addEventListener("scroll", changeColor)

    const NavMobilStyling = {
        Navbarstyling: {
            display: "flex",
            position: "fixed",
            width: "100%",
            justifyContent: "end",
            fontFamily: "roboto",
            fontSize:"160%"
        },

        burgerIcon: {
            margin:"3% 3%",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%"
        },

        DropdownStyling: {
            backgroundColor: "#FFFFFF",
            padding: "0.5rem 0.5rem",
            width: "60%",
            marginTop: "3%",
            borderRadius:"5%"
        },

        DropdownLinks: {
            color: "#25346d",
            textDecoration: "none",
            marginLeft: "0%",
            paddingLeft:"10%"
        },

        Understreker: {
            margin:"3% 3%"
        }


    }

    return (
        <div style={NavMobilStyling.Navbarstyling}>
            {dropdownVisible && (
                <div style={NavMobilStyling.DropdownStyling}>
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/">Hjem</Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/Products">Produkter</Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/Services">Tjenester</Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/About">Om oss</Link>
                    <hr style={NavMobilStyling.Understreker} />
                    <Link style={NavMobilStyling.DropdownLinks} onClick={scrollToTop} to="/Contact">Kontakt Oss</Link>
                </div>
            )}
            <Hamburger size={"35"} color={ props.home ? color ? "#FFFFFF" : "#25346d" : "#25346d"} style={NavMobilStyling.burgerIcon} onToggle={() => setDropdownVisible(dropdownVisible ? false : true)} />
        </div>
    )
}