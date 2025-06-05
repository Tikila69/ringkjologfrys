import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import { ProduktRadio } from "../components/radiobtnpumpe";
import KontaktOss from "../components/KontaktOss";
import { NavbarMobil } from "../components/navbarMobil";

function Products(props) {
  const sideStyling = {
    Products: {
      display: "flex",
      flexDirection: "column",
      alignItems: "",
      fontFamily: "roboto",
      fontWeight: "400",
      backgroundColor: "#EFEFEF",
    },
    buttonstyling: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "start",
      marginLeft: window.innerWidth > 768 ? "15rem" : "11%",
      marginTop: "2rem",
      marginBottom: "3rem",
      gap: "1rem",
    },
    headerPlacement: {
      display: "flex",
      justifyContent: "center",
      marginLeft: window.innerWidth > 768 ? "10rem" : "",
    },
  };

  const [produkter, setProdukter] = useState([]);
  const prodRef = useMemo(() => collection(db, "Produkter"), []);


  useEffect(() => {
    const getText = async () => {
      const data = await getDocs(prodRef);
      setProdukter(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id }))
      );
    };
    getText();
  }, [prodRef]);

  return (
    <div style={sideStyling.Products}>
      {window.innerWidth > 768 ? <Navbar /> : <NavbarMobil />}
      <div style={sideStyling.headerPlacement}>
        {produkter.map((data) => {
          if (data.id === "header") {
            return (
              <Header
                OverskriftTekst={data.tittel}
                UnderskriftTekst={data.undertekst}
                products={true}
              />
            );
          }
          return null;
        })}
      </div>

      <div style={sideStyling.buttonstyling}>
        <Link style={{ textDecoration: "none" }} to="/Products/LuftLuft">
          <ProduktRadio text={"Luft/Luft"} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Products/LuftVann">
          <ProduktRadio text={"Luft/Vann"} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Products/VaeskeVann">
          <ProduktRadio text={"Væske/Vann"} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Products/Kjolerom">
          <ProduktRadio text={"Kjølerom"} />
        </Link>
      </div>

      <KontaktOss
        tittel={"Kontakt Oss"}
        undertekst={"Send oss gjerne en mail eller ring oss i dag!"}
        tlf={"+47 918 06 377"}
      />

      <Footer />
    </div>
  );
}

export default Products;
