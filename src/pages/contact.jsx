import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Infocard } from "../components/Infocard";
import { BsTelephone } from "react-icons/bs";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function Contact(props) {
    const contactStyling = {
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
        <div className="bg-[#EFEFEF] font-[roboto]">
            <Navbar />
            <div className="flex flex-col items-center p-10">
                <div className="mt-20">
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
                </div>

                <div className="flex flex-wrap content-center">
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
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
