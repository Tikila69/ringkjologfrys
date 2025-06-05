function Merker(props) {
  const merkestyling = {
    comp: {
      display: "flex",
      flexDirection: "column",
    },
    img: {
      marginLeft: "15rem",
      display: "flex",
      flexDirection: "row",
    },
    hrstyling: {
      width: "29rem",
      border: "1px solid #25346d",
      margin: "1rem 0rem 2rem 45rem",
    },
    tittel: {
      display: "flex",
      justifyContent: "center",
      color: "#25346d",
      fontFamily: "roboto",
      fontSize: "3rem",
    },
    imgstyling: {
      width: "50%",
      height: "50%",
      margin: "1rem 1rem 1rem 1rem",
    },
    bishimgstyling: {
      width: "15%",
      height: "15%",
      margin: "1rem 1rem 1rem 1rem",
    },
  };

  return (
    <div style={merkestyling.comp}>
      <h1 style={merkestyling.tittel}>{props.tittel}</h1>
      <hr style={merkestyling.hrstyling} />
      <div style={merkestyling.img}>
        <img style={merkestyling.imgstyling} src={props.img1} alt="" />
        <img style={merkestyling.bishimgstyling} src={props.img2} alt="" />
      </div>
    </div>
  );
}

export default Merker;
