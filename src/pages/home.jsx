import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { ProductsHome } from "../components/ProductsHome";
import { Infocard } from "../components/Infocard";
import KontaktOss from "../components/KontaktOss";
import { NavbarMobil } from "../components/navbarMobil";
import { Link } from "react-router-dom";

function Home() {
  const stylingHome = {
    Home: {
      display: "flex",
      flexDirection: "column",
      alignContent: "Space-between",
      background: "#EFEFEF",
      fontFamily: "roboto",
    },
    stylingHomeInfocard: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "2%",
      border: "none"
    },
  };

  const [forside, setForside] = useState([]);
  const textRef = useMemo(() => collection(db, "Forside"), []);
  useEffect(() => {
    const getText = async () => {
      const data = await getDocs(textRef);
      setForside(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => (a.order > b.order ? 1 : -1))
      );
    };
    getText();
  }, [textRef]);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div style={stylingHome.Home}>
      {window.innerWidth > 768 ? <Navbar home={true} /> : <NavbarMobil home={true} />}

      {forside.map((data) => {
        if (data.id === "header") {
          return <Header OverskriftTekst={data.tittel} home={true} />;
        }
        return null;
      })}

      <ProductsHome />

      <button style={stylingHome.stylingHomeInfocard} to="/Products/LuftLuft" alt="Luft-Luft">
        {forside.map((data) => {
          if (
            data.id === "infocardLuftLuft" ||
            data.id === "infocardLuftVann" ||
            data.id === "infocardVaeskeVann" ||
            data.id === "infocardKjolerom"
          ) {
            return (
              <Link to={data.link} style={{textDecoration:"none"}} onClick={scrollToTop}>
                <Infocard 
                  imgSource={data.img}
                  employeeName={data.tittel}
                  employeeDescription={data.beskrivelse}
                  backgroundColor={"white"}
                  tekst={data.alt}
                />
                </Link>
            );
          }
          return null;
        })}
      </button>

      {forside.map((data) => {
        if (data.id === "kontaktOssKomponent") {
          return (
            <KontaktOss
              tittel={data.tittel}
              undertekst={data.undertekst}
              tlf={data.tlf}
            />
          );
        }
        return null;
      })}

      <Footer />
    </div>
  );
}

export default Home;
