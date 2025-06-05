import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Form } from "../components/form";
import { Infocard } from "../components/Infocard";
import { BsTelephone } from "react-icons/bs";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Header from "../components/header";
import { NavbarMobil } from "../components/navbarMobil";

function Contact(props) {
  const contactStyling = {
    aboutStyling: {
      backgroundColor: "#EFEFEF",
      fontFamily: "roboto",
    },

    Container: {
      display: "flex",
      flexWrap: "wrap-reverse",
      justifyContent: "center",
      gap:"5%",
    },

    Informasjon: {
      display: "flex",
      flexDirection: "column",
      alignItem: "start",
      widht:"20rem",
      marginLeft: window.innerWidth>768 ? "13%" : "",
    },
    Contact: {
      marginTop:window.innerWidth>768 ? "":"5%"
    },

    Formen: {
      marginTop: "1rem",
      marginLeft: window.innerWidth<768 ? "10%":"",
    },

    InfocardPlacement: {
      display: "flex",
      flexWrap:"wrap",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "5%",
    },

    IconStyling: {
      fill: "#25346d",
      fontSize: "1.5rem",
      marginLeft: "1rem",
      verticalAlign: "middle",
      paddingRight: "0.7rem",
    },
  };

  const [infocardData, setInfocardData] = useState([]);
  const textRef = useMemo(() => collection(db, "Ansatte"), []);
  useEffect(() => {
    const getText = async () => {
      const data = await getDocs(textRef);
      setInfocardData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getText();
  }, [textRef]);

  return (
    <div style={contactStyling.aboutStyling}>
      {window.innerWidth>768 ? <Navbar /> : <NavbarMobil />}
      <div style={contactStyling.Informasjon}>
        <Header
          OverskriftTekst="BEFARING"
          UnderskriftTekst="For at vi skal kunne gjennomføre en befaring trenger vi 
          kontakt informasjon samt litt informasjon om hva du ønsker. Fyll ut formen 
          ved siden av så kontakter vi deg så fort vi klarer."
        />
      </div>
      <div style={contactStyling.Container}>

        <div style={contactStyling.Contact}>
          {infocardData.map((data) => {
            if (data.id.startsWith("d")) {
              return (
                <Infocard
                  imgSource={data.img}
                  employeeName={data.navn}
                  tekst={data.alt}
                  employeeDescription={data.beskrivelse}
                  tlfnr={data.tlf}
                  tlfIcon={<BsTelephone style={contactStyling.IconStyling} />}
                  backgroundColor={"white"}
                />
              );
            }
            return null;
          })}
        </div>

        <div style={contactStyling.Formen}>
          <Form />
        </div>
      </div>
          
      <div style={contactStyling.InfocardPlacement}>
          
        {infocardData.map((data) => {
          if (data.id.startsWith("Info") && data.aktiv === true) {
            return (
              <Infocard
                imgSource={data.img}
                employeeName={data.navn}
                tekst={data.alt}
                employeeDescription={data.beskrivelse}
                tlfnr={data.tlf}
                tlfIcon={<BsTelephone style={contactStyling.IconStyling} />}
                backgroundColor={"white"}
              />
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
