import React from "react";

export const ProductsHome = () => {
    const productsHomeStyling = {
      HeaderTekst: {
          display: "flex",
          color: "#25346d",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          marginTop: "2%",
          marginBottom: "1%",
          fontFamily: "roboto",
          fontWeight: "200"

      },
      hrStyling: {
        color: "#25346d",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        border: "1px solid #25346d",
        

      }
    }

    return (
      <div>
        <h1 style={productsHomeStyling.HeaderTekst}>Produkter</h1>
        <hr style={productsHomeStyling.hrStyling}/>
      </div>
    );
  }