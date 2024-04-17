import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import { useLocation } from "react-router-dom";
import styles from "../ItemDetails/itemdetails.module.css";
import AddBid from "../Add/AddBid";

export default function ItemDetails() {
  const {
    auctions,
    setAuctions,
    bids,
    fetchBidsByAuctionId,
    fetchAuctionById,
    auctionDetails,
  } = useContext(AuctionContext);
  const location = useLocation();
  const auctionId = location.state.id;
  const auction = auctions.find((auct) => auct.AuctionID === auctionId);

  const [isEnded, setIsEnded] = useState(false);
  const [winningBid, setWinningBid] = useState(null);

  useEffect(() => {
    if (auction) {
      fetchBidsByAuctionId(auction.AuctionID);
      const endDate = new Date(auction.EndDate);
      setIsEnded(endDate < new Date());
    }
  }, [auction]);

  useEffect(() => {
    if (bids && bids.length > 0) {
      const winningBid = bids.reduce((prev, current) =>
        prev.Amount > current.Amount ? prev : current
      );
      setWinningBid(winningBid);
    }
  }, [bids]);

  useEffect(() => {
    if (auctionId) {
      fetchAuctionById(auctionId);
    }
  }, [auctionId]);

  useEffect(() => {
    if (auctionDetails) {
      const endDate = new Date(auctionDetails.EndDate);
      setIsEnded(endDate < new Date());
    }
  }, [auctionDetails]);

  const handleDelete = async (auctionId) => {
    const url = `https://auctioneer2.azurewebsites.net/auction/1zyx/${auctionId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove auction");
      }
      setAuctions(auctions.filter((auct) => auct.AuctionID !== auctionId));
      window.history.back();
    } catch (error) {
      console.error("Error remove auction", error);
    }
  };

  const handleBidAdded = () => {
    fetchBidsByAuctionId(auctionId);
  };

  return (
    <>
      {auction && (
        <div className={styles.detailsContainer}>
          <button onClick={() => window.history.back()}>Tillbaka</button>
          <img className={styles.image} src="" alt="" />
          <h2>{auction.Title}</h2>
          <h3>{auction.Description}</h3>
          <p>Upplagd av {auction.CreatedBy}</p>
          <h3>Start pris: {auction.StartingPrice} SEK</h3>
          {isEnded ? (
            <>
              <h2>Auktionen är avslutad.</h2>
              {winningBid ? (
                <p>
                  Vinnande budet var {winningBid.Amount} kr av{" "}
                  {winningBid.Bidder}
                </p>
              ) : (
                <>
                  <p>Auktionen är avslutad utan några bud.</p>
                  <button onClick={() => handleDelete(auction.AuctionID)}>
                    Radera
                  </button>
                </>
              )}
            </>
          ) : (
            <section className={styles.bidsSection}>
              <AddBid
                auctionId={auction.AuctionID}
                startingPrice={auction.StartingPrice}
                onBidAdded={handleBidAdded}
              />
              {bids && bids.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Bud</th>
                      <th>Budgivare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids
                      .slice()
                      .reverse()
                      .map((bid, index) => (
                        <tr key={index}>
                          <td>{bid.Amount}</td>
                          <td>{bid.Bidder}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <>
                  <h3>Inga Bud än</h3>
                  <button onClick={() => handleDelete(auction.AuctionID)}>
                    Radera
                  </button>
                </>
              )}
            </section>
          )}
        </div>
      )}
    </>
  );
}
