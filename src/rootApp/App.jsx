import React from "react";
import MainLayout from "../components/MainLayout";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
