import React from "react";
import Core from "./core/core";
import Footer from "./footer/footer";
import Header from "./header/header";

function Body() {
  return (
    <div className="body">
      <Header />
      <Core />
      <Footer />
    </div>
  );
}

export default Body;
