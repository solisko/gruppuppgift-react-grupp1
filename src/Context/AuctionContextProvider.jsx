import { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {
  const [auctions, setAuctions] = useState([]);

  
    const fetchAuctions = async (searchTerm = '') => {
      try {
        const response = await fetch(`https://auctioneer.azurewebsites.net/auction/1zyx`);
        if (!response.ok) {
          throw new Error("Failed to fetch auctions");
        }
        let data = await response.json();

        

        if(!searchTerm) {
          const currentDatetime = new Date();
          data = data.filter(auction => new Date(auction.EndDate) > currentDatetime);
        }
        
        if (searchTerm) {
          data = data.filter(auction => auction.Title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setAuctions(data);
      } catch (error) {
        console.error("Error fetching auctions", error);
      }
    };

    useEffect(() => {
      fetchAuctions();
    },[]);

  return (
    <AuctionContext.Provider value={{ auctions, fetchAuctions }}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionProvider;
