import React from "react";
import { Knapp } from "../components/Button";
import { Link } from "react-router-dom";

function Header(props) {
  const stylingHeader = {
    Header: {
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      alignSelf: "center",
      backgroundImage: props.home
        ? "url('https://firebasestorage.googleapis.com/v0/b/ring-kjol-og-frys.appspot.com/o/HeaderIMGVer6.webp?alt=media&token=7bad1097-9476-4881-a357-7f8870aa442b')"
        : "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: props.home ? "30rem" : "",
      marginBottom: "2rem",
    },

    Overskrift: {
      color: props.home ? "#FFFFFF" : "#25346d",
      backgroundColor: "transparent",
      marginLeft: props.home ? window.innerWidth<768 ? "25%" : "15%" : "5rem",
      marginTop: window.innerWidth>768 ? props.home ?  "12rem" : "10rem" : "25%",
      marginBottom: props.home ? "" : "2rem",
      width: window.innerWidth<768 ? "70%" : "20%",
      fontFamily: "roboto",
      fontWeight: "100",
      textTransform: "uppercase",
    },

    Underskift: {
      color: props.home ? "#FFFFFF" : "rgb(31,31,31)",
      backgroundColor: "transparent",
      width: window.innerWidth>768 ? props.home ? "30%" : "50%" : "80%",
      marginLeft: window.innerWidth>768 ? "5rem" : "11%",
      marginTop: "2rem",
      marginBottom: "0rem",
      fontSize: props.home ? "" : "1.5rem",
    },

    KontaktOssKnapp: {
      marginLeft: window.innerWidth<768 ? "20%" : "13.5%",
      marginTop: "2rem",
      textDecoration: "none",
      backgroundColor: "transparent",
    },

    hrStyling: {
      marginLeft: window.innerWidth>768 ? "5rem" : "2rem",
      marginTop: "",
      border: "1px solid #25346d",
      width: window.innerWidth>768 ? "25rem" : "80%",
    },

    logostyling: {
      marginLeft: "3%",
      marginTop:"3%",
      width:"60%"
    }
  };

  return (
    <div style={stylingHeader.Header}>
      {props.home ? window.innerWidth>768 ? "" : <img style={stylingHeader.logostyling} src={"https://firebasestorage.googleapis.com/v0/b/ring-kjol-og-frys.appspot.com/o/RINGLOGO_WHITE.webp?alt=media&token=bd0c5a52-696b-4637-a59f-e96d822185fc"} alt={"Logo"}  /> :""}
      <h1 style={stylingHeader.Overskrift}>{props.OverskriftTekst}</h1>
      {props.home ? "" : <hr style={stylingHeader.hrStyling} />}
      {props.home ? (
        <Link style={stylingHeader.KontaktOssKnapp} to="/Contact">
          <Knapp
            backgroundColor="#FFFFFF"
            textColor="#25346d"
            text="Kontakt Oss"
          />
        </Link>
      ) : (
        <p style={stylingHeader.Underskift}>{props.UnderskriftTekst}</p>
      )}
    </div>
  );
}
export default Header;
