import React from "react";

function LiggendeInfocard(props) {
  const liggendeInfocardStyle = {
    display: "flex",
    borderWidth: 1,
    height: "25rem",
    width: "95%",
    alignItems: "center",
    borderRadius: 5,
    color: props.textColor,
    fontSize: 16,
    boxShadow: "2px 2px 5px grey",
    backgroundColor: "white",
    marginTop: "3rem",
    fontFamily: "roboto"
  };

  const divStyle = {
    borderRadius: 5,
    backgroundColor: "transparent"
  };

  const liggendeImageStyle = {
    width: "300%",
    display: "flex",
    marginLeft: "2rem",
    marginRight: "2rem",
    flexDirection: "column",
    maxWidth: "20rem",
    maxHeight: "15rem"
  };

  const tekstdiv = {
    display: "flex",
    flexDirection: "column"
  };

  const overskriftLiggende = {
    color: "black",
    fontSize: "2rem",
    justifyContent: "flexTop"
  };

  const undertekstLiggende = {
    marginTop: "4rem",
    color: "black",
    fontSize: "1rem",
    marginRight: "4rem"
  };

  const pil = {
    color: "grey",
    justifyContent: "flex-end",
    display: "flex",
    marginRight: "2rem",
    marginTop: "3rem",
    fontSize: "2rem",
    paddingTop: "2rem"
  };

  return (
    <div style={divStyle}>
      <div style={liggendeInfocardStyle}>
        {props.text}
        <img
          style={liggendeImageStyle}
          src={props.bilde}
          alt={props.bildeAlt}
        />
        <div style={tekstdiv}>
          <p style={overskriftLiggende}>{props.overskriftLiggende}</p>
          <p style={undertekstLiggende}>{props.undertekstLiggende}</p>
          <p style={pil}>{props.pil}</p>
        </div>
      </div>
    </div>
  );
}

export default LiggendeInfocard;
