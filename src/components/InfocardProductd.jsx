import React from "react";

export const InfocardProduct = (props) => {
  const infocardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderWidth: 1,
    height: "30rem",
    width: "18rem",
    borderRadius: 5,
    color: props.textColor,
    fontSize: 16,
    margin: "1rem",
    boxShadow: "2px 2px 5px grey",
    justifyContent: "top",
  };

  const imageStyle = {
    marginTop: "1rem",
    marginLeft: "0.9rem",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const infocardProductName = {
    fontSize: "1.2rem",
    marginTop: "1rem",
    marginLeft: "1rem",
    linehigh: "1.5rem",
  };
  const infocardTitle = {
    fontSize: "1rem",
    marginTop: "1rem",
    linehigh: "1.5rem",
  };
  const infocardProductDescription = {
    fontSize: "0.9rem",
    marginTop: "1rem",
    marginLeft: "1rem",
    alignItems: "left",
    linehight: "1.5rem",
    textalign: "left",
  };

  return (
    <div>
      <div style={infocardStyle}>
        {props.text}
        <img style={imageStyle} src={props.imgSource} alt="Bilde" />
        <p style={infocardProductName}>{props.productName}</p>
        <p style={infocardProductDescription}>{props.productDescription}</p>

      </div>
    </div>
  );
};
