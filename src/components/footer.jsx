import { Link } from "react-router-dom";

const Footer = (props) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const scrollToAnsatt = () => {
        window.scrollTo(0, 1000);
    };

    return (
        <footer className="flex flex-wrap justify-evenly bg-[#25346d] p-4">
            <section className="text-white gap-1 flex flex-col h-full">
                <h1>Ring kjøl og frys</h1>
                <hr />
                <p>@ 2022</p>
                <p>Personvilkår</p>
                <p>Telefon: +47 918 06 377</p>
                <p>Email: post@ringkjol.no</p>
            </section>
            <section className="flex flex-col text-white gap-1">
                <h2 className="underline">Produkter</h2>
                <Link to="/Products" onClick={scrollToTop}>
                    <p>Luft luft</p>
                </Link>
                <Link to="/Products" onClick={scrollToTop}>
                    <p>Luft vann</p>
                </Link>
                <Link to="/Products" onClick={scrollToTop}>
                    <p>Væske vann</p>
                </Link>
                <Link to="/Products" onClick={scrollToTop}>
                    <p>Kjølerom</p>
                </Link>
            </section>
            <section className="flex flex-col text-white gap-1">
                <h2 className="underline">Tjenester</h2>
                <Link to="/Services" onClick={scrollToTop}>
                    <p>Service</p>
                </Link>
                <Link to="/Services" onClick={scrollToTop}>
                    <p>Reperasjon</p>
                </Link>
                <Link to="/Services" onClick={scrollToTop}>
                    <p>Montering</p>
                </Link>
                <Link to="/Services" onClick={scrollToTop}>
                    <p>Kjøl og frys</p>
                </Link>
                <Link to="/Services" onClick={scrollToTop}>
                    <p>F-Gass kontroll</p>
                </Link>
            </section>
            <section className="flex flex-col text-white gap-1">
                <h2 className="underline">Om oss</h2>
                <Link to="/About" onClick={scrollToAnsatt}>
                    <p>Etablert</p>
                </Link>
                <Link to="/About" onClick={scrollToTop}>
                    <p>Sertifikasjoner</p>
                </Link>
            </section>
            <section className="flex flex-col text-white gap-1">
                <h2 className="underline">Kontakt oss</h2>
                <Link to="/Contact" onClick={scrollToTop}>
                    <p>Kontaktskjema</p>
                </Link>
                <Link to="/Contact" onClick={scrollToAnsatt}>
                    <p>Ansatte</p>
                </Link>
            </section>
        </footer>
    );
};

export default Footer;
