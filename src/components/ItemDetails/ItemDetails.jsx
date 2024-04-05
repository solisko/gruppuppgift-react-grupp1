import { useContext, useEffect } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import { useLocation } from "react-router-dom";
import styles from "../ItemDetails/itemdetails.module.css";
import AddBid from "../Add/AddBid";

export default function ItemDetails() {
  const { auctions, bids, fetchBidsByAuctionId } = useContext(AuctionContext);
  const location = useLocation();
  const auction = auctions.filter(
    (auct) => auct.AuctionID === location.state.id
  )[0];

  useEffect(() => {
    if (auction) {
      fetchBidsByAuctionId(auction.AuctionID);
    }
  }, [auction, fetchBidsByAuctionId]);

  return (
    <>
      {auction && (
        <div className={styles.detailsContainer}>
          <img className={styles.image} src="" alt="" />
          <h3>{auction.Description}</h3>
          <section className={styles.bidsSection}>
            <AddBid auction={auction} />
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
              <h2>Inga Bud än</h2>
            )}
          </section>
          <p>Upplagd av {auction.CreatedBy}</p>
        </div>
      )}
    </>
  );
}
