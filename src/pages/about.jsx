import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Certificate } from "../components/Certificate";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import LiggendeInfocard from "../components/liggendeinfo";
import KontaktOss from "../components/KontaktOss";
import { NavbarMobil } from "../components/navbarMobil";
import { Historie } from "../components/Historiekort";

function About() {
  const aboutStyling = {
    About: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      backgroundColor: "#EFEFEF",
    },
    HeaderTekst: {
      display: "flex",
      color: "#25346d",
      alignSelf: "start",
      justifyContent: "end",
      fontSize: "2rem",
      marginTop: "0%",
      marginBottom: "2rem",
      fontFamily: "roboto",
      fontWeight: "200",
      margin: window.innerWidth > 768 ? "0rem 15rem" : "11%",
    },

    hrStyling: {
      display: "flex",
      alignSelf: "start",
      marginLeft: window.innerWidth > 768 ? "15rem" : "11%",
      border: "1px solid #25346d",
      width: window.innerWidth > 768 ? "25rem" : "80%",
      marginTop: "2rem",
    },

    certificatePlacement: {
      backgroundColor: "#transparent",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "start",
      marginBottom: "3rem",
      marginLeft: window.innerWidth > 768 ? "15rem" : "11%",
      marginRight: "5rem",
      gap: "1rem",
    },
    liggendeImageStyle: {
      width: "20%",
      display: "flex",
      marginRight: "2rem",
      flexDirection: "column",
      justifyContent: "start",
      
    },
    h1Styling: {
      marginTop: window.innerWidth > 768 ? "10rem" : "22%",
      color: "#25346d",
      fontFamily: "roboto",
      fontWeight: "200",
      marginLeft: window.innerWidth > 768 ? "15rem" : "11%",
    },
    liggendestyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
    },
    styleliggende: {
      marginLeft: window.innerWidth > 768 ? "15rem" : "7%",
      marginRight: window.innerWidth > 768 ? "1rem" : "",
    },
  };

  const [certificateData, setCertificateData] = useState([]);
  const textRef = useMemo(() => collection(db, "Serfikat"), []); ;
  useEffect(() => {
    const getText = async () => {
      const data = await getDocs(textRef);
      setCertificateData(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getText();
  }, [textRef]);
  const [etablertData, setetablertData] = useState([]);
  const etablertRef = useMemo(() =>  collection(db, "Om oss"), []);
  useEffect(() => {
    const getText = async () => {
      const data = await getDocs(etablertRef);
      setetablertData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getText();
  }, [etablertRef]);

  return (
    <div style={aboutStyling.About}>
      {window.innerWidth > 768 ? <Navbar /> : <NavbarMobil />}
      <h1 style={aboutStyling.h1Styling}>SERTIFIKAT</h1>
      <hr style={aboutStyling.hrStyling} />

      <div style={aboutStyling.certificatePlacement}>
        {certificateData.map((data) => {
          return (
            <Certificate
              standing={window.innerWidth > 768 ? data.standing : "false"}
              imgSource={data.img}
              alttekst={data.alt}
              certificateText={data.beskrivelse}
              backgroundColor={"white"}
            />
          );
        })}
      </div>
      <div style={aboutStyling.liggendestyle}>
        <h1 style={aboutStyling.HeaderTekst}>OM OSS</h1>
        <hr style={aboutStyling.hrStyling} />
        <div style={aboutStyling.styleliggende}>
          {etablertData.map((etablertdata) => {
            return window.innerWidth > 768 ? (
              <LiggendeInfocard
                bilde={etablertdata.img}
                bildeAlt={etablertdata.bildealt}
                overskriftLiggende={etablertdata.overskrift}
                undertekstLiggende={etablertdata.beskrivelse}
              />
            ) : (
              <Historie
                imgSource={etablertdata.img}
                tekst={etablertdata.bildealt}
                employeeName={etablertdata.overskrift}
                employeeDescription={etablertdata.beskrivelse}
                backgroundColor={"#FFFFFF"}  
              />
            );
          })}
        </div>
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

export default About;
