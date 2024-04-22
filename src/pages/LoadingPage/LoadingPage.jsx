import "./LoadingPage.css";
import logoWindows from "./../../assets/logo-windows.png";

function LoadingPage() {
  return (
    <div className="page-loading">
      <div className="window">
        <div className="logo">
          <div style={{ display: "flex", alignItems: "end" }}>
            <p className="top">Microsoft</p>
            <img src={logoWindows} width="140px" />
          </div>

          <p className="mid">
            Windows<span>XP</span>
          </p>
          <p className="bottom">Professional</p>
        </div>
        <div className="container">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="footer-loading">
        <span style={{ margin: "20px" }}>
          Copyright © Microsoft Corporation
        </span>
        <span
          style={{
            margin: "20px",
            fontWeight: "bold",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          Microsoft©
        </span>
      </div>
    </div>
  );
}

export default LoadingPage;
