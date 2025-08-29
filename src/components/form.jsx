import { useState } from "react";
import { RadioButton } from "./radiobtn";
import { Button } from "./Button";
import { CiPhone, CiMail, CiUser, CiHome } from "react-icons/ci";
import { send } from "emailjs-com";

export const Form = () => {
    const [inputs, setinputs] = useState({});
    console.log(inputs);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        send("service_pj6kysm", "template_o7kvpe9", inputs, "3VbbZE1B-jX8iDfOA")
            .then((response) => {
                window.location.reload();
                alert("Mailen er sendt");
            })
            .catch((err) => {});
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="m-2 bg-white rounded-lg p-6">
                <div className="flex flex-wrap justify-between">
                    <section className="flex flex-col gap-1" onChange={handleChange}>
                        <h1>Produkttype</h1>
                        <RadioButton
                            name="sectionRadiobtn"
                            text="  Luft / Luft"
                            valuetext="Befaring for Luft til Luft"
                            required={true}
                        />
                        <RadioButton
                            name="sectionRadiobtn"
                            text="  Luft / Vann"
                            valuetext="Befaring for Luft til Vann"
                        />
                        <RadioButton
                            name="sectionRadiobtn"
                            text="  Væske / Vann"
                            valuetext="Befaring for Væske til Vann"
                        />
                        <RadioButton
                            name="sectionRadiobtn"
                            text="  Tjeneste"
                            valuetext="Tjeneste forespørsel"
                        />
                        <RadioButton name="sectionRadiobtn" text="  Annet" valuetext="annet" />
                    </section>
                    <section className="flex flex-col gap-2">
                        <div className="flex">
                            <CiUser className="flex self-center m-1" />
                            <input
                                type="text"
                                name="navn"
                                value={inputs.name}
                                onChange={handleChange}
                                className="border-2 rounded-lg p-1"
                                placeholder="Navn..."
                                required
                            />
                        </div>
                        <div className="flex">
                            <CiMail className="flex self-center m-1" />
                            <input
                                type="email"
                                name="email"
                                value={inputs.epost}
                                onChange={handleChange}
                                className="border-2 rounded-lg p-1"
                                placeholder="E-mail..."
                                required
                            />
                        </div>
                        <div className="flex">
                            <CiPhone className="flex self-center m-1" />
                            <input
                                type="tel"
                                name="telefon"
                                value={inputs.telefon}
                                onChange={handleChange}
                                className="border-2 rounded-lg p-1"
                                placeholder="Telefon..."
                                required
                            />
                        </div>
                        <div className="flex">
                            <CiHome className="flex self-center m-1" />
                            <input
                                type="adr"
                                name="adresse"
                                value={inputs.adresse}
                                onChange={handleChange}
                                className="border-2 rounded-lg p-1"
                                placeholder="Adresse..."
                                required
                            />
                        </div>
                    </section>
                </div>
                <section>
                    <textarea
                        name="description"
                        value={inputs.description}
                        onChange={handleChange}
                        cols={window.innerWidth > 768 ? "53" : "26"}
                        rows="9"
                        className="w-full mt-4 p-2 border-2 rounded-lg"
                        placeholder="Beskrivelse..."
                        required
                    ></textarea>
                    <div className="flex justify-end">
                        {/* <input type="submit" /> */}
                        <Button
                            backgroundColor="#25346d"
                            textColor="#FFFFFF"
                            text="Send inn kontaktskjema"
                            pointer={true}
                        />
                    </div>
                </section>
            </form>
        </div>
    );
};
