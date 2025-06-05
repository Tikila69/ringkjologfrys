import { useState } from "react";
import { RadioButton } from "./radiobtn";
import { Knapp } from "./Button";
import { CiPhone, CiMail, CiUser, CiHome } from "react-icons/ci";
import { send } from "emailjs-com";

export const Form = () => {
  const [inputs, setinputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send("service_pj6kysm", "template_9fajid6", inputs, "a5yUjOiBBy-hg68ZO")
      .then((response) => {
        window.location.reload();
        alert("Mailen er sendt");
      })
      .catch((err) => {});
  };

  const formStyling = {
    form: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      fontFamily: "roboto",
      alignContent: "space-between",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1rem",
      justifyContent: "center",
    },
    radiobtnpumpe: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
    },
    input: {
      backgroundColor: "rgb(242,242,242)",
      border: "0px",
      borderRadius: "0.3rem 0.3rem 0.3rem 0.3rem",
    },
    inputtop: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      backgroundColor: "rgb(242,242,242)",
      border: "0px",
      borderRadius: "0rem 0.3rem 0.3rem 0rem",
      paddingLeft: "0.5rem",
      borderLeft: "1px solid grey",
    },
    div: {
      border: "1px",
      boxShadow: "5px 5px 10px grey",
      borderRadius: "1rem",
      padding: window.innerWidth > 768 ? "4rem" : "3rem",
      width: window.innerWidth > 768 ? "25rem" : "60%",
      paddingBottom: "3rem",
      marginRight: "0rem",
      backgroundColor: "white",
      height: window.innerWidth > 768 ? "23rem" : "30rem",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "space-between",
      alignItems: "space-between",
    },
    knapp: {
      marginLeft: window.innerWidth > 768 ? "64%" : "",
      marginTop: "1rem",
    },
    header: {
      fontFamily: "roboto",
      marginBottom: "0.5rem",
    },

    labelStyle: {
      fontFamily: "roboto",
      fontSize: "0.7rem",
      marginBottom: "0.2rem",
      marginTop: "0.5rem",
    },

    spacing: {
      alignContent: "space-between",
    },
    iconPlacing: {
      display: "flex",
      flexDirection: "row",
    },
    icon: {
      border: "0px solid black",
      backgroundColor: "rgb(242,242,242)",
      borderRadius: "0.3rem 0rem 0rem 0.3rem",
      padding: "0.1rem",
    },
    paragraf: {
      fontFamily: "roboto",
      marginTop: "1.5rem",
      marginBottom: "0.5rem",
    },
  };
  return (
    <div style={formStyling.div}>
      <form onSubmit={handleSubmit} style={formStyling.form}>
        <div style={formStyling.container}>
          <section style={formStyling.section} onChange={handleChange}>
            <h1 style={formStyling.header}>Produkttype</h1>
            <RadioButton
              name="sectionRadiobtn"
              text="  Luft / Luft"
              style={formStyling.radiobtnpumpe}
              valuetext="Befaring for Luft til Luft"
              required={true}
            />
            <RadioButton
              name="sectionRadiobtn"
              text="  Luft / Vann"
              style={formStyling.radiobtnpumpe}
              valuetext="Befaring for Luft til Vann"
            />
            <RadioButton
              name="sectionRadiobtn"
              text="  Væske / Vann"
              style={formStyling.radiobtnpumpe}
              valuetext="Befaring for Væske til Vann"
            />
            <RadioButton
              name="sectionRadiobtn"
              text="  Tjeneste"
              style={formStyling.radiobtnpumpe}
              valuetext="Tjeneste forespørsel"
            />
            <RadioButton
              name="sectionRadiobtn"
              text="  Annet"
              style={formStyling.radiobtnpumpe}
              valuetext="annet"
            />
          </section>
          <section style={formStyling.section}>
            <div style={formStyling.iconPlacing}>
              <CiUser style={formStyling.icon} />
              <input
                type="text"
                name="navn"
                value={inputs.name}
                onChange={handleChange}
                style={formStyling.inputtop}
                placeholder="Navn..."
                required
              />
            </div>
            <div style={formStyling.iconPlacing}>
              <CiMail style={formStyling.icon} />
              <input
                type="email"
                name="email"
                value={inputs.epost}
                onChange={handleChange}
                style={formStyling.inputtop}
                placeholder="E-mail..."
                required
              />
            </div>
            <div style={formStyling.iconPlacing}>
              <CiPhone style={formStyling.icon} />
              <input
                type="tel"
                name="telefon"
                value={inputs.telefon}
                onChange={handleChange}
                style={formStyling.inputtop}
                placeholder="Telefon..."
                required
              />
            </div>
            <div style={formStyling.iconPlacing}>
              <CiHome style={formStyling.icon} />
              <input
                type="adr"
                name="adresse"
                value={inputs.adresse}
                onChange={handleChange}
                style={formStyling.inputtop}
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
            style={{ resize: "none" }}
            placeholder="Beskrivelse..."
            required
          ></textarea>
          <div style={formStyling.knapp}>
            {/* <input type="submit" /> */}
            <Knapp
              backgroundColor="#25346d"
              textColor="#FFFFFF"
              text="Send inn kontaktskjema"
              style={formStyling.knapp}
            />
          </div>
        </section>
      </form>
    </div>
  );
};
