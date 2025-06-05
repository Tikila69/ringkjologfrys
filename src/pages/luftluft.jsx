import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import { Infocard } from "../components/Infocard";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import { ProduktRadio } from "../components/radiobtnpumpe";
import KontaktOss from "../components/KontaktOss";
import { NavbarMobil } from "../components/navbarMobil";

function LuftLuft(props) {
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
  const infocardStyling = {
    Contact: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignContent: "space-between",
      marginLeft: "10rem",
    },

    infocardPlacement: {
      backgroundColor: "#transparent",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginLeft: window.innerWidth > 768 ? "14rem" : "5%",
      marginBottom: "5rem",
    },
  };

  const [produkter, setProdukter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize Firestore reference
  const prodRef = useMemo(() => collection(db, "Produkter"), []);

  useEffect(() => {
    const getText = async () => {
      try {
        const data = await getDocs(prodRef);
        setProdukter(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id }))
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getText();
  }, [prodRef]);

  // Filtered data for header and infocards
  const headerData = produkter.find((data) => data.id === "headerLuftLuft");
  const infocardData = produkter.filter(
    (data) => data.id.startsWith("luftLuft") && data.aktiv === true
  );

  if (loading)
    return <div style={{ padding: "2rem" }}>Laster produkter...</div>;
  if (error)
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        Feil ved lasting av produkter.
      </div>
    );

  return (
    <div style={sideStyling.Products}>
      {window.innerWidth > 768 ? <Navbar /> : <NavbarMobil />}

      <div style={sideStyling.headerPlacement}>
        {headerData && (
          <Header
            OverskriftTekst={headerData.tittel}
            UnderskriftTekst={headerData.undertekst}
            products={true}
          />
        )}
      </div>

      <div style={sideStyling.buttonstyling}>
        <Link style={{ textDecoration: "none" }} to="/Products">
          <ProduktRadio text={"Luft/Luft"} status={true} />
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

      <div style={infocardStyling.infocardPlacement}>
        {infocardData.map((data) => (
          <Infocard
            key={data.id}
            imgSource={data.img}
            employeeName={data.tittel}
            employeeDescription={data.beskrivelse}
            backgroundColor={"white"}
            tekst={data.alt}
          />
        ))}
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

export default LuftLuft;
