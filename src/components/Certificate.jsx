import React from "react";

export const Certificate = (props) => {
  const certificateStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: props.backgroundColor,
    borderWidth: 1,
    height: window.innerWidth > 768 ? "20rem" : "90%",
    width:
      window.innerWidth > 768 ? (props.standing ? "15rem" : "40rem") : "18rem",
    borderRadius: 5,
    color: props.textColor,
    fontSize: 16,
    margin: window.innerWidth > 768 ? "0rem" : "",
    marginTop: "3rem",
    boxShadow: "2px 2px 5px grey",
    justifyContent: "top",
  };

  const imageStyle = {
    marginTop: "1rem",
    marginLeft: props.standing ? "15%" : "20%",
    width: props.standing ? "70%" : "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const certificateDesc = {
    fontSize: props.standing ? "1.1rem" : "1rem",
    marginTop: props.standing ? "2rem" : "2.5rem",
    marginLeft:
      window.innerWidth > 768 ? (props.standing ? "15%" : "5%") : "10%",
    marginRight: props.standing ? "15%" : "5%",
    textAlign: props.standing ? "center" : "left",
    fontFamily: "roboto",
    fontWeight: props.standing ? "400" : "400",
    marginBottom: window.innerWidth > 768 ? "5%" : "10%",
  };

  return (
    <div>
      <div style={certificateStyle}>
        {props.text}
        <img style={imageStyle} src={props.imgSource} alt={props.alttekst} />
        <p style={certificateDesc}>{props.certificateText}</p>
      </div>
    </div>
  );
};
