import React from "react";

export const Tjeneste = (props) => {
  const tjenesterStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: props.backgroundColor,
    borderWidth: 1,
    height: "18rem",
    width: "18rem",
    borderRadius: 5,
    color: props.textColor,
    fontSize: 16,
    margin: "1rem",
    boxShadow: "2px 2px 5px grey",
    justifyContent: "top",
  };

  const tjenesterName = {
    fontSize: "1.2rem",
    marginTop: "1rem",
    marginLeft: "1rem",
    linehigh: "1.5rem",
    fontFamily: "roboto",
    fontWeight: "400"
  };

  const tjenesterDescription = {
    fontSize: "0.9rem",
    marginTop: "1rem",
    marginLeft: "1rem",
    alignItems: "left",
    linehight: "1.5rem",
    textalign: "left",
    fontFamily: "roboto",
    fontWeight: "200"
  };

  const tjenesterHr = {
    width: "40%",
    marginLeft: "6%",
    marginTop: "2%"
  };

  return (
    <div>
      <div style={tjenesterStyle}>
        {props.text}
        <p style={tjenesterName}>{props.tjenesterName}</p>
        <hr style={tjenesterHr}/>
        <p style={tjenesterDescription}>{props.tjenesterDescription}</p>
      </div>
    </div>
  );
};
