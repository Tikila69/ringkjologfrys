import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Knapp } from "./Button"
import LogoWhite from "../assets/RINGLOGO_WHITE.webp"
import Logo from "../assets/RINGLOGO.webp"

function Navbar(props) {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [color, setColor] = useState(true)
  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(false)
    } else {
      setColor(true)
    }
  }
  window.addEventListener("scroll", changeColor)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  const styling = {
    Nav: {
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      height: "5rem",
      backgroundColor: props.home ? color ? "transparent" : "#FFFFFF" : "#FFFFFF",
      boxShadow: props.home ? color ? "0px 0px 0px black" : "5px 0px 10px black" : "5px 0px 10px black",
      transitionDuration: "0.3s",
      fontFamily: "roboto"
    },
  
    Navlinks: {
      display: "flex",
      flexDirection: "row",
      marginTop:"2rem",
      gap: "4rem",
      marginRight: "1rem",
      listStyle: "none",
      maxHeight:"3rem",
      fontFamily: "roboto",
      fontWeight: "200",
      '@media only screen and (min-width: 768px)': {
        flexDirection: 'column',
        marginTop: '0rem',
        gap: '1rem',
      },
    },
  
    NavlinksA: {

      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: props.home ? color ? "#FFFFFF" : "#25346d" : "#25346d",
      maxHeight: "1rem",
      fontFamily: "roboto",
      fontWeight: "400"
    },

    Dropdown: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "sticky",
      alignItems: "center",
      maxWidth:"4rem",
      fontFamily: "roboto",
      '@media only screen and (min-width: 768px)': {
        display: 'none',
      },
    },

    DropdownLinks: {
      display: "flex",
      textDecoration: "none",
      margin:"1rem 1rem",
      padding: "0rem 1rem",
      width:"5rem",
      marginLeft: "1.7rem",
      fontSize: "0.9rem",
      color: props.home ? color ? "#FFFFFF" : "#25346d" : "#25346d",
      fontFamily: "roboto"
    },

    Logo: {
      display: "flex",
      alignSelf:"center",
      width: "25%",
      height: "auto",
      marginLeft: "0.5rem",
    },

    LogoBilde: {
      display: "flex",
      width: "100%",
    },

    Understreker: {
      display: "flex",
      justifyContent: "flex-end",
      margin:"0rem 1.8rem",
      maxWidth: "70%",
    }
  }

  return (
    <div style={styling.Nav}>
      <Link style={styling.Logo} onClick={scrollToTop} to="/"><img style={styling.LogoBilde} src={ props.home ? color ? LogoWhite : Logo : Logo } alt="Logo" /></Link>
      <ul style={styling.Navlinks}>
        <div
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
          style={styling.Dropdown}
        >
          <Link style={styling.NavlinksA} onClick={scrollToTop} to="/Products">Produkter</Link>
          {isDropdownVisible && (
            <div style={{ background: props.home ? color ? "rgba(0, 0, 0, 0.4)" : "#FFFFFF" : "#FFFFFF",marginTop:"1rem" }}>
              <Link style={styling.DropdownLinks} onClick={scrollToTop} to="/Products/LuftLuft">Luft-Luft</Link>
              <hr style={styling.Understreker} />
              <Link style={styling.DropdownLinks} onClick={scrollToTop} to="/Products/LuftVann">Luft-Vann</Link>
              <hr style={styling.Understreker}/>
              <Link style={styling.DropdownLinks} onClick={scrollToTop} to="/Products/VaeskeVann">Væske-Vann</Link>
              <hr style={styling.Understreker}/>
              <Link style={styling.DropdownLinks} onClick={scrollToTop} to="/Products/Kjolerom">Kjølerom</Link>
            </div>
          )}
        </div>
        <Link style={styling.NavlinksA} onClick={scrollToTop} to="/Services">Tjenester</Link>
        <Link style={styling.NavlinksA} onClick={scrollToTop} to="/About">Om Oss</Link>
        <Link style={styling.NavlinksA} onClick={scrollToTop} to="/Contact"><Knapp
          backgroundColor={props.home ? color ? "#FFFFFF" : "#25346d" : "#25346d"}
          textColor={props.home ? color ? "#25346d" : "#FFFFFF" : "#FFFFFF"}
          text="Kontakt Oss"
        /></Link>
      </ul>
    </div>
  ); 

}

export default Navbar;