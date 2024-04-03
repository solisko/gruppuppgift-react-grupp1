import React from "react";
import "./App.css";
import AuctionContextProvider from "./Context/AuctionContextProvider";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import Footer from "./components/Footern/Footer";
import SearchBar from "./components/Searchfield/SearchBar";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <>
      <div className="App">
        <AuctionContextProvider>
          <BrowserRouter>
            <Navigation />
            <SearchBar />
            <Admin />
            <Switch />
          </BrowserRouter>
        </AuctionContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
