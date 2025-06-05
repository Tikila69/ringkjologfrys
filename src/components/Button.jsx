import React from "react";

export const Knapp = (props) => {
  const knappStyle = {
    display: "flex",
    backgroundColor: props.backgroundColor,
    borderStyle: "solid",
    borderWidth: 1,

    height: props.kontaktoss ? 80 : 40,
    width: props.kontaktoss ? 300 : 150,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    color: props.textColor,

    fontSize: props.kontaktoss ? 20 : 16,
    cursor: props.tlf ? "" : "pointer",
  };

  const divStyle = {
    borderRadius: 5,
    backgroundColor: "transparent",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const knappContainerStyle = {
    maxWidth: 300,
    width: "100%",
    padding: "0 20px",
  };

  return (
    <div style={divStyle}>
      <div style={knappContainerStyle}>
        <button style={knappStyle}>{props.text}</button>
      </div>
    </div>
  );
};
