import { Button } from "./Button";
import { Link } from "react-router-dom";

function KontaktOss(props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const kontaktOssStyling = {
        hovedstyle: {
            margin: "10rem 0rem 5rem 0rem",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            fontFamily: "Roboto",
        },
        skriftstyle: {
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
            gap: "1rem",
        },
        knappstyle: {
            display: "flex",
            flexDirection: window.innerWidth < 768 ? "column" : "row",
            alignSelf: window.innerWidth < 768 ? "center" : "end",
            gap: "3rem",
            textDecoration: "none",
        },
        tlfstyle: {
            display: "flex",
            alignSelf: "center",
            fontSize: "1rem",
            border: "1px solid black",
            padding: "0.5rem 0.5rem",
            borderRadius: 5,
            backgroundColor: "white",
        },
        linkstyle: {
            textDecoration: "none",
        },
        undertekststyle: {
            fontSize: "1.1rem",
            marginBottom: window.innerWidth < 768 ? "15%" : "",
        },
        tittelstyle: {
            fontSize: "1.3rem",
            marginBottom: window.innerWidth < 768 ? "5%" : "",
            alignSelf: window.innerWidth < 768 ? "center" : "",
        },
    };

    return (
        <div style={kontaktOssStyling.hovedstyle}>
            <div style={kontaktOssStyling.skriftstyle}>
                <h1 style={kontaktOssStyling.tittelstyle}>{props.tittel}</h1>
                <p style={kontaktOssStyling.undertekststyle}>{props.undertekst}</p>
            </div>
            <div style={kontaktOssStyling.knappstyle}>
                <Link style={kontaktOssStyling.linkstyle} onClick={scrollToTop} to="/Contact">
                    <Button
                        backgroundColor={"#25346d"}
                        textColor={"white"}
                        text={"Kontakt oss"}
                        kontaktoss={true}
                        fontSize={20}
                        pointer={true}
                    />
                </Link>
                <Button
                    style={kontaktOssStyling.tlfstyle}
                    backgroundColor={"white"}
                    text={props.tlf}
                    textColor={"black"}
                />
            </div>
        </div>
    );
}

export default KontaktOss;
