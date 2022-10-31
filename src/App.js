import React from "react";
import Body from "./components/body/body";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/profile";

function App() {
  window.addEventListener("resize", navCheck);
  let [nav, setNav] = React.useState(true);
  const toggleNav = () => {
    setNav(!nav);
  };

  function navCheck() {
    if (window.innerWidth < "550") {
      setNav(false);
    } else {
      setNav(true);
    }
  }
  return (
    <div className="container">
      <Profile toggleNav={toggleNav}></Profile>
      <Dashboard nav={nav}></Dashboard>
      <Body />
    </div>
  );
}

export default App;
