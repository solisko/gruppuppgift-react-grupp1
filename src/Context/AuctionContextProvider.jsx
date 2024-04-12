import { createContext, useState, useEffect } from "react";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {
  const [auctions, setAuctions] = useState([]);
  const [bids, setBids] = useState([]);

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
    } catch (error) {
      console.error("Error fetching auctions", error);
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

  const deleteAuction = async (auction) => {
    const url = `https://auctioneer2.azurewebsites.net/auction/1zyx/${auction.AuctionID}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify({
          GroupCode: '1zyx', 
          AuctionID: auction.AuctionID

        })
      });
      if (!response.ok) {
        throw new Error('Failed to remove auction');
      }
      fetchAuctions();
    } catch (error) {
      console.error('Error remove auction', error);
    }
  }

  useEffect(() => {
    fetchAuctions();
  }, []);

  return (
    <AuctionContext.Provider
      value={{ auctions, fetchAuctions, bids, fetchBidsByAuctionId, deleteAuction }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionProvider;
