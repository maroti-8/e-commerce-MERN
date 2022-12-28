import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: { families: ["Roboto", "Driod Sans", "Chilanka"] },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
