import { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch(`https://auctioneer.azurewebsites.net/auction/1zyx`);
        if (!response.ok) {
          throw new Error("Failed to fetch auctions");
        }
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error("Error fetching auctions", error);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <AuctionContext.Provider value={{ auctions }}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionProvider;
