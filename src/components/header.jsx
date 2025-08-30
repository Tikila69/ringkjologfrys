import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center w-full h-[30rem] flex flex-col place-content-center gap-6"
            style={{
                backgroundImage: props.backgroundImage ? props.backgroundImage : "",
                padding: props.backgroundImage ? "4rem" : "0",
            }}
        >
            <h1 className=" " style={{ color: props.backgroundImage ? "#FFFFFF" : "#25346d" }}>
                {props.OverskriftTekst}
            </h1>
            {props.backgroundImage ? "" : <hr className="border border-[#25346d] w-1/3" />}
            {props.button ? (
                <Link to="/Contact">
                    <Button
                        backgroundColor="#FFFFFF"
                        textColor="#25346d"
                        pointer={true}
                        text="Kontakt Oss"
                    />
                </Link>
            ) : (
                <p>{props.UnderskriftTekst}</p>
            )}
        </div>
    );
}
export default Header;
