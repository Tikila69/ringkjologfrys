import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { ProduktRadio } from "../components/radiobtnpumpe";
import KontaktOss from "../components/KontaktOss";
import { Infocard } from "../components/Infocard";

function Products(props) {
    const [produkter, setProdukter] = useState([]);
    const [productChoice, setProductChoice] = useState("");
    const prodRef = useMemo(() => collection(db, "Produkter"), []);

    const handleProductChoice = (choice) => {
        setProductChoice(choice);
    };

    useEffect(() => {
        const getText = async () => {
            const data = await getDocs(prodRef);
            setProdukter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id })));
        };
        getText();
    }, [prodRef]);

    return (
        <div className="flex flex-col" style={{ fontFamily: "roboto" }}>
            <Navbar />
            <div className="ml-6 flex flex-col max-w-[50%] self-center">
                <div className="flex text-2xl">
                    {produkter.map((data) => {
                        if (data.id === "header" + productChoice.replace("/", "")) {
                            return (
                                <Header
                                    OverskriftTekst={data.tittel}
                                    UnderskriftTekst={data.undertekst}
                                    products={true}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <div className="flex self-center gap-2 flex-wrap">
                <ProduktRadio
                    text={"Luft/Luft"}
                    handleClick={() => handleProductChoice("Luft/Luft")}
                    status={productChoice}
                />
                <ProduktRadio
                    text={"Luft/Vann"}
                    handleClick={() => handleProductChoice("Luft/Vann")}
                    status={productChoice}
                />
                <ProduktRadio
                    text={"Væske/Vann"}
                    handleClick={() => handleProductChoice("Væske/Vann")}
                    status={productChoice}
                />
                <ProduktRadio
                    text={"Kjølerom"}
                    handleClick={() => handleProductChoice("Kjølerom")}
                    status={productChoice}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6 mb-10">
                {productChoice === "Luft/Luft" &&
                    produkter.map((data) => {
                        if (data.id.startsWith("luftLuft") && data.aktiv === true) {
                            return (
                                <Infocard
                                    key={data.id}
                                    imgSource={data.img}
                                    employeeName={data.tittel}
                                    employeeDescription={data.beskrivelse}
                                    backgroundColor={"white"}
                                    tekst={data.alt}
                                />
                            );
                        }
                    })}
                {productChoice === "Luft/Vann" &&
                    produkter.map((data) => {
                        if (data.id.startsWith("luftVann") && data.aktiv === true) {
                            return (
                                <Infocard
                                    key={data.id}
                                    imgSource={data.img}
                                    employeeName={data.tittel}
                                    employeeDescription={data.beskrivelse}
                                    backgroundColor={"white"}
                                    tekst={data.alt}
                                />
                            );
                        }
                    })}
                {productChoice === "Væske/Vann" &&
                    produkter.map((data) => {
                        if (data.id.startsWith("vaeskeVann") && data.aktiv === true) {
                            return (
                                <Infocard
                                    key={data.id}
                                    imgSource={data.img}
                                    employeeName={data.tittel}
                                    employeeDescription={data.beskrivelse}
                                    backgroundColor={"white"}
                                    tekst={data.alt}
                                />
                            );
                        }
                    })}
                {productChoice === "Kjølerom" &&
                    produkter.map((data) => {
                        if (data.id.startsWith("kjolerom") && data.aktiv === true) {
                            return (
                                <Infocard
                                    key={data.id}
                                    imgSource={data.img}
                                    employeeName={data.tittel}
                                    employeeDescription={data.beskrivelse}
                                    backgroundColor={"white"}
                                    tekst={data.alt}
                                />
                            );
                        }
                    })}
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
