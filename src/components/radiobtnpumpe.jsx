import React, { useState } from "react";

export const ProduktRadio = (props) =>{
    const [active, setActive] = useState(props.status);
    const handleClick = () => {
        setActive(!active)
    }

    const radiobtnStyling = {
        Button: {
            display: "flex",
            textDecoration:"none",
            borderStyle: "solid",
            borderWidth: "0.08rem",
            height: "2.5rem",
            width: "8rem",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            fontFamily: "roboto",
            fontSize: "0.75rem",

            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0rem 0.04rem 0.1rem black",
            backgroundColor: active ? "#25346d" : "white",
            color: active ? "white" : "#25346d",
            borderColor:"#25346d",
        },
        
        Radioknapper: {
            display: "flex",
            gap: "1rem",
            marginLeft: props.products ? "5rem" : "",
            textDecoration:"none"
        }
    }

    return (
        <div style={radiobtnStyling.Radioknapper}>
                <button 
                onClick={handleClick}
                style={radiobtnStyling.Button}>{props.text}</button>
        </div>
    )
}
