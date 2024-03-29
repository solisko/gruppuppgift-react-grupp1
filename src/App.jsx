import "./App.css";
import AuctionContextProvider from "./Context/AuctionContextProvider";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import ListAuctions from "./components/List/ListAuctions";
import AddAuction from "./components/Add/AddAuction";

function App() {
  return (
    <>
      <div className="App">
        <AuctionContextProvider>
          <BrowserRouter>
            <Navigation />
            <Switch />
          </BrowserRouter>
          <div className="mainContent" >
            <AddAuction/>
            <ListAuctions />
          </div>
        </AuctionContextProvider>
      </div>
    </>
  );
}

export default App;
