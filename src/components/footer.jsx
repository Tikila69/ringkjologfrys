import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToAnsatt = () => {
    window.scrollTo(0, 1000);
  };
  const footerStyle = {
    padding: {
      marginTop: "5rem",
    },
    container: {
      display: "flex",
      flexDirection: window.innerWidth < 768 ? "column" : "row",
      justifyContent: "space-between",
      backgroundColor: "#25346d",
      padding: "1rem",
      paddingBottom: "0.5rem",
      height: "100%",
      paddingLeft: window.innerWidth < 768 ? "" : "2rem",
      paddingRight: window.innerWidth < 768 ? "" : "2rem",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      padding: "1rem",
      height: "100%",
    },
    section2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      padding: "1rem",
      paddingTop: "0rem",
      paddingLeft: window.innerWidth < 768 ? "5%" : "1.5rem",
      height: "100%",
    },
    pStyle: {
      color: "#FFFFFF",
      fontFamily: "roboto",
      fontSize: "100%",
      marginBottom: "2%",
    },
    h2Style: {
      display: "flex",
      justifyContent: "top",
      color: "#FFFFFF",
      fontFamily: "roboto",
      marginBottom: "5%",
      marginTop: "0",
      paddingTop: "0",
    },

    h1Style: {
      display: "flex",
      justifyContent: "top",
      color: "#FFFFFF",
      fontFamily: "roboto",
      marginBottom: "5%",
    },
    hrstyle: {
      marginBottom: "5%",
    },

    link: {
      textDecoration: "none",
    },
  };

  return (
    <div style={footerStyle.padding}>
      <footer style={footerStyle.container}>
        <section style={footerStyle.section}>
          <h1 style={footerStyle.h1Style}>Ring kjøl og frys</h1>
          <hr style={footerStyle.hrstyle} />

          <p style={footerStyle.pStyle}>@ 2022</p>
          <p style={footerStyle.pStyle}>Personvilkår</p>
          <p style={footerStyle.pStyle}>Telefon: +47 918 06 377</p>
          <p style={footerStyle.pStyle}>Email: post@ringkjol.no</p>
        </section>
        <div style={footerStyle.container}>
          <section style={footerStyle.section2}>
            <h2 style={footerStyle.h2Style}>Produkter</h2>
            <Link
              to="/Products/LuftLuft"
              onClick={scrollToTop}
              style={footerStyle.link}
            >
              <p style={footerStyle.pStyle}>Luft luft</p>
            </Link>
            <Link
              to="/Products/LuftVann"
              onClick={scrollToTop}
              style={footerStyle.link}
            >
              <p style={footerStyle.pStyle}>Luft vann</p>
            </Link>
            <Link
              to="/Products/VaeskeVann"
              onClick={scrollToTop}
              style={footerStyle.link}
            >
              <p style={footerStyle.pStyle}>Væske vann</p>
            </Link>
            <Link
              to="/Products/Kjolerom"
              onClick={scrollToTop}
              style={footerStyle.link}
            >
              <p style={footerStyle.pStyle}>Kjølerom</p>
            </Link>
          </section>
          <section style={footerStyle.section2}>
            <h2 style={footerStyle.h2Style}>Tjenester</h2>
            <Link to="/Services" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Service</p>
            </Link>
            <Link to="/Services" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Reperasjon</p>
            </Link>
            <Link to="/Services" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Montering</p>
            </Link>
            <Link to="/Services" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Kjøl og frys</p>
            </Link>
            <Link to="/Services" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>F-Gass kontroll</p>
            </Link>
          </section>
          <section style={footerStyle.section2}>
            <h2 style={footerStyle.h2Style}>Om oss</h2>
            <Link to="/About" onClick={scrollToAnsatt} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Etablert</p>
            </Link>
            <Link to="/About" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Sertifikasjoner</p>
            </Link>
          </section>
          <section style={footerStyle.section2}>
            <h2 style={footerStyle.h2Style}>Kontakt oss</h2>
            <Link to="/Contact" onClick={scrollToTop} style={footerStyle.link}>
              <p style={footerStyle.pStyle}>Kontaktskjema</p>
            </Link>
            <Link
              to="/Contact"
              onClick={scrollToAnsatt}
              style={footerStyle.link}
            >
              <p style={footerStyle.pStyle}>Ansatte</p>
            </Link>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
