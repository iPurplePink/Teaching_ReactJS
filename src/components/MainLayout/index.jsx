import React from "react";
import Header from "./Header";

const MainLayout = props => {
  return (
    <>
      <Header />
      <main className="main-section">{props.children}</main>
    </>
  );
};

export default MainLayout;
