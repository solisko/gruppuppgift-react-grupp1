import React from "react";
import "./App.css";
import AuctionContextProvider from "./Context/AuctionContextProvider";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import Footer from "./components/Footern/Footer";
import SearchBar from "./components/Search/SearchBar";
import Admin from "./components/Admin/Admin";
import AuctionRow from "./components/Admin/AuctionRow";

function App() {
  return (
    <>
      <div className="App">
        <AuctionContextProvider>
          <BrowserRouter>
            <Navigation />
            <SearchBar />
            <Switch />
          </BrowserRouter>
        </AuctionContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
