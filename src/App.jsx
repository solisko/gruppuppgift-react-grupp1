import "./App.css";
import AuctionContextProvider from "./Context/AuctionContextProvider";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import ListAuctions from "./components/List/ListAuctions";
import Footer from "./components/Footern/Footer";

function App() {
  return (
    <>
      <div className="App">
        <AuctionContextProvider>
          <BrowserRouter>
            <Navigation />
            <Switch />
          </BrowserRouter>
        </AuctionContextProvider>
      </div>
      <Footer /> 
    </>
  );
}

export default App;
