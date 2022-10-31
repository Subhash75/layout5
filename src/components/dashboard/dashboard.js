import React from "react";
import Application from "./application";
import Component from "./component";
import Layout from "./layout";
import Menu from "./menu";
import Page from "./page";
import { FaBars } from "react-icons/fa";

function Dashboard({ nav }) {
  return (
    <>
      {nav ? (
        <div className="dashboard">
          <div className="db-header">
            <p>Logo</p>
            <p>
              <FaBars />
            </p>
          </div>
          <Menu />
          <Application />
          <Layout />
          <Page />
          <Component />
        </div>
      ) : null}
    </>
  );
}

export default Dashboard;
