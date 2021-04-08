import * as React from "react";

const Nav = ({ color }) => {
  return (
    <nav
      style={{
        background: `${color ? color : "darkgreen"}`,
        width: "100%",
        height: "100px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        position: "fixed",
        top: "0px",
        margin: "0px",
      }}
    >
      Nav
    </nav>
  );
};

export default Nav;
