import React from "react";

export const Historie = (props) => {
  const infocardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: props.backgroundColor,
    borderWidth: 1,
    height: "53rem",
    width: props.tjenester ? window.innerWidth>768 ? "22rem" : "20.5rem" :"18rem",
    borderRadius: 5,
    color: props.textColor,
    margin: "1rem",
    boxShadow: "2px 2px 5px grey",
    justifyContent: "top",
  };

  const imageStyle = {
    marginTop: "1rem",
    marginLeft: "0.9rem",
    width: "90%",
    minHeight: props.tjenester ? "" : "15rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  };
  const tlfNummer = {
    color: "rgb(37,52,109,255)",
    fontSize: "1rem",
    marginTop: "5.5rem",
    marginLeft: "6rem",
    verticalAlign: "middle",
    linehigh: "1.5rem",
    fontFamily: "roboto",
    fill: "none"
  };
  const infocardName = {
    marginTop: "1rem",
    marginRigth:"1rem",
    marginLeft: "1rem",
    linehigh: "1.5rem",
    fontFamily: "roboto",
    fontWeight: "400",
    fontSize:props.tjenester ? "30px" : "20px"
  };

  const infocardDescription = {
    marginTop: "1rem",
    marginLeft: "1rem",
    marginRight:"1rem",
    alignItems: "left",
    linehight: "1.5rem",
    textalign: "left",
    fontFamily: "roboto",
    fontWeight: "200",
    fontSize: props.tjenester ? "20px" : "15px",
    color:"black"
  };

  const hrstyling = {
    border: "1px solid #25346d",
    width: window.innerWidth>768 ? "20rem" : "90%",
    margin:"0.5rem 1rem 1rem 1rem",
    marginLeft:"1rem"
  }

  return (
    <div>
      <div style={infocardStyle}>
        <img style={imageStyle} src={props.imgSource} alt={props.tekst} />
        <p style={infocardName}>{props.employeeName}</p>
        {props.tjenester ? <hr style={hrstyling}/> : ""}
        <p style={infocardDescription}>{props.employeeDescription}</p>
        <p style={tlfNummer}>
          {props.tlfIcon}
          {props.tlfnr}
        </p>
      </div>
    </div>
  );
};
