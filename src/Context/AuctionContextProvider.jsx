import { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {
  const [auctions, setAuctions] = useState([]);
  const [activeAuctions, setActiveAuctions] = useState([]);
  const [closedAuctions, setClosedAuctions] = useState([]);
  const [bids, setBids] = useState([]);
  const [auctionDetails, setAuctionDetails] = useState(null);

  const fetchAuctions = async (searchTerm = "", includeEnded = false) => {
    let url = "https://auctioneer2.azurewebsites.net/auction/1zyx";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch auctions");
      }
      let data = await response.json();

      if (!includeEnded) {
        const currentDatetime = new Date();
        data = data.filter(
          (auction) => new Date(auction.EndDate) > currentDatetime
        );
      }

      if (searchTerm) {
        data = data.filter((auction) =>
          auction.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setAuctions(data);

      if (includeEnded) {
        setClosedAuctions(data);
      } else {
        setActiveAuctions(data);
      }
    } catch (error) {
      console.error("Error fetching auctions", error);
    }
  };

  const fetchAuctionById = async (auctionId) => {
    const url = `https://auctioneer2.azurewebsites.net/auction/1zyx/${auctionId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Failed to fetch auction details");
      }
      const data = await response.json();
      setAuctionDetails(data);
    } catch (error) {
      console.error("Error fetching auction details", error);
    }
  };

  const fetchBidsByAuctionId = async (auctionId) => {
    const url = `https://auctioneer2.azurewebsites.net/bid/1zyx/${auctionId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch bids");
      }
      const data = await response.json();
      setBids(data);
    } catch (error) {
      console.error("Error fetching bids", error);
    }
  };

  useEffect(() => {
    fetchAuctions();
  }, []);

  return (
    <AuctionContext.Provider
      value={{
        auctions,
        setAuctions,
        activeAuctions,
        closedAuctions,
        fetchAuctions,
        bids,
        fetchBidsByAuctionId,
        fetchAuctionById,
        auctionDetails,
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionProvider;
