import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import { Infocard } from "../components/Infocard";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import KontaktOss from "../components/KontaktOss";
import { NavbarMobil } from "../components/navbarMobil";


function Services(props) {
  const servicesStyling = {
    Services: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      fontFamily: "Roboto",
      fontWeight: "400",
      backgroundColor: "#EFEFEF",
    },

    Headerstyling: {
      marginLeft: window.innerWidth>768 ?  "10rem" : "",    }

  };
  const infocardStyling = {
    Contact: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignContent: "space-between",
      marginLeft: window.innerWidth>768 ? "12.6rem" : "",
      flexWrap:"wrap"
    },

    InfocardPlacement: {
      backgroundColor: "#transparent",
      display: "flex",
      flexDirection: "row",
      justifyContent:"space-around",
      flexWrap: "wrap",
      gap: "5rem 0rem",
      flex:"0 0 75%"
    }
  };

  const [tjenester, setTjenester] = useState([]);
  const tjenesteRef = useMemo(() => collection(db, "Tjenester"), []);

  useEffect(() => {
    const getText = async () => {
      const data = await getDocs(tjenesteRef);
      setTjenester(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getText();
  }, [tjenesteRef]);

  return (
    <div style={servicesStyling.Services}>
      {window.innerWidth>768 ? <Navbar /> : <NavbarMobil />}

      <div style={servicesStyling.Headerstyling} >
        {tjenester.map((data) => {
          if (data.id === "Header") {
            return (
              <Header
                OverskriftTekst={data.tittel}
                UnderskriftTekst={data.beskrivelse}
              />
            );
          }
          return null;
        })}
      </div>

      <div style={infocardStyling.Contact}>
        <div style={infocardStyling.InfocardPlacement}>
          {tjenester.map((data) => {
            if (data.id !== "Header") {
              return (
                <Infocard
                  key={data.id}
                  tjenester={true}
                  employeeName={data.tittel}
                  employeeDescription={data.beskrivelse}
                  backgroundColor={"white"}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      <KontaktOss tittel={"Kontakt Oss"} undertekst = {"Send oss gjerne en mail eller ring oss i dag!"} tlf = {"+47 918 06 377"} />
      <Footer />
    </div>
  );
}

export default Services;
