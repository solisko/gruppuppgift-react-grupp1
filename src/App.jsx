import "./App.css";
import AuctionContextProvider from "./Context/AuctionContextProvider";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import ListAuctions from "./components/ListAuctions/ListAuctions"

function App() {
  return (
    <>
      <div className="App">
        <AuctionContextProvider>
          <BrowserRouter>
            <Navigation />
            <Switch />
          </BrowserRouter>
          <ListAuctions/>
        </AuctionContextProvider>
      </div>
    </>
  );
}

export default App;
