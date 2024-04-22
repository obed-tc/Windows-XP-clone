import "./WelcomePage.css";
function WelcomePage() {
  return (
    <div className="page-welcome">
      <div className="bar-top"></div>
      <div
        style={{
          flex: 1,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "15%",
          fontSize: "30px",
          fontStyle: "italic",
        }}
      >
        <span>Bienvenido</span>
      </div>
      <div className="bar-bottom"></div>
    </div>
  );
}

export default WelcomePage;
