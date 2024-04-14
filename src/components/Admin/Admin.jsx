import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "./admin.module.css";

function Admin() {
  const { auctions, fetchAuctions, bids, fetchBidsByAuctionId } =
    useContext(AuctionContext);
  const [activeAuctions, setActiveAuctions] = useState([]);
  const [closedAuctions, setClosedAuctions] = useState([]);

  useEffect(() => {
    fetchAuctions("", true);
  }, []);

  useEffect(() => {
    const currentDatetime = new Date();
    const active = auctions.filter(
      (auction) => new Date(auction.EndDate) > currentDatetime
    );
    const closed = auctions.filter(
      (auction) => new Date(auction.EndDate) <= currentDatetime
    );
    setActiveAuctions(active);
    setClosedAuctions(closed);

    active.forEach((auction) => {
      fetchBidsByAuctionId(auction.AuctionID);
    });

    closed.forEach((auction) => {
      fetchBidsByAuctionId(auction.AuctionID);
    });
  }, [auctions]);

  const hasBids = (auction) => {
    console.log("Auction ID:", auction.AuctionID);
    console.log("Bids:", bids);
    const auctionBids = bids.filter(
      (bid) => bid.AuctionID === auction.AuctionID
    );
    console.log("Auction Bids:", auctionBids);
    return auctionBids.length > 0;
  };

  const handleDelete = async (auction) => {
    const url = `https://auctioneer2.azurewebsites.net/auction/1zyx/${auction.AuctionID}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify({
          GroupCode: "1zyx",
          AuctionID: auction.AuctionID,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to remove auction");
      }
      fetchAuctions();
    } catch (error) {
      console.error("Error remove auction", error);
    }
  };

  return (
    <div className={styles.table}>
      <h3>Öppna auktioner</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Bud</th>
            <th>Slutdatum</th>
            <th>Radera</th>
          </tr>
        </thead>
        <tbody>
          {activeAuctions.map((auction) => (
            <tr key={auction.AuctionID}>
              <td>{auction.Title}</td>
              <td>{hasBids(auction) ? "Har bud" : "Inga bud"}</td>
              <td>{new Date(auction.EndDate).toLocaleDateString("sv-SE")}</td>
              <td>
                {hasBids(auction) ? (
                  <button disabled>Radera</button>
                ) : (
                  <button onClick={() => handleDelete(auction)}>Radera</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Avslutade auktioner</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th></th>
            <th>Slutpris</th>
            <th>Radera</th>
          </tr>
        </thead>
        <tbody>
          {closedAuctions.map((auction) => (
            <tr key={auction.AuctionID}>
              <td>{auction.Title}</td>
              <td>{hasBids(auction) ? "Har bud" : "Inga bud"}</td>
              <td>{new Date(auction.EndDate).toLocaleDateString("sv-SE")}</td>
              <td>
                {hasBids(auction) ? (
                  <button disabled>Radera</button>
                ) : (
                  <button onClick={() => handleDelete(auction)}>Radera</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
