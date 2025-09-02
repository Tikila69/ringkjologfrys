import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { ProductsHome } from "../components/ProductsHome";
import { Infocard } from "../components/Infocard";
import KontaktOss from "../components/KontaktOss";
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
            border: "none",
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
        window.scrollTo(0, 0);
    };

    return (
        <div style={stylingHome.Home} className="w-full">
            <Navbar home={true} />

            {forside.map((data) => {
                if (data.id === "header") {
                    return (
                        <Header
                            OverskriftTekst={data.tittel}
                            home={true}
                            backgroundImage="url('https://firebasestorage.googleapis.com/v0/b/ring-kjol-og-frys.appspot.com/o/HeaderIMGVer6.webp?alt=media&token=7bad1097-9476-4881-a357-7f8870aa442b')"
                            button={true}
                        />
                    );
                }
                return null;
            })}

            <ProductsHome />

            <div className="flex flex-wrap justify-center mt-2">
                {forside.map((data) => {
                    if (
                        data.id === "infocardLuftLuft" ||
                        data.id === "infocardLuftVann" ||
                        data.id === "infocardVaeskeVann" ||
                        data.id === "infocardKjolerom"
                    ) {
                        return (
                            <div>
                                <Infocard
                                    imgSource={data.img}
                                    employeeName={data.tittel}
                                    employeeDescription={data.beskrivelse}
                                    tekst={data.alt}
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

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
