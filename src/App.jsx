import "./App.css";
import AuctionContextProvider from "./Context/AuctionContextProvider";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";

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
    </>
  );
}

export default App;
