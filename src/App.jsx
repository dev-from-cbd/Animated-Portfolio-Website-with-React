import { useEffect, useState } from "react";
import { Home, Layout, PortfolioDetails } from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <div className="preloader">preloader</div>}
      <h1>H1</h1>
    </>
  );
}

export default App;
