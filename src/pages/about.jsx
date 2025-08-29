import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Certificate } from "../components/Certificate";
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import LiggendeInfocard from "../components/liggendeinfo";
import KontaktOss from "../components/KontaktOss";

function About() {
    const [certificateData, setCertificateData] = useState([]);
    const textRef = useMemo(() => collection(db, "Serfikat"), []);
    useEffect(() => {
        const getText = async () => {
            const data = await getDocs(textRef);
            setCertificateData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getText();
    }, [textRef]);
    const [etablertData, setetablertData] = useState([]);
    const etablertRef = useMemo(() => collection(db, "Om oss"), []);
    useEffect(() => {
        const getText = async () => {
            const data = await getDocs(etablertRef);
            setetablertData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getText();
    }, [etablertRef]);

    return (
        <div className="flex flex-col bg-[#EFEFEF] font-['roboto'] font-[400]">
            <Navbar />
            <div className="flex flex-col self-center">
                <h1 className="mt-36 text-[#25346d] flex justify-start ml-8 text-3xl font-[roboto] uppercase">
                    sertifikat
                </h1>
                <hr className="border-1 border-[#25346d] w-1/2 ml-6 p-2" />

                <div className="flex flex-wrap gap-4 ml-6 mr-6">
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
            </div>
            <div className="flex flex-col self-center">
                <h1 className="mt-36 text-[#25346d] flex justify-start ml-8 text-3xl font-[roboto] uppercase">
                    om oss
                </h1>
                <hr className="border-1 border-[#25346d] w-1/2 ml-6 p-2" />
                <div className="flex flex-wrap gap-4 ml-6 mr-6">
                    {etablertData.map((etablertdata) => {
                        return (
                            <LiggendeInfocard
                                bilde={etablertdata.img}
                                bildeAlt={etablertdata.bildealt}
                                overskriftLiggende={etablertdata.overskrift}
                                undertekstLiggende={etablertdata.beskrivelse}
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
