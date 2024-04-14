import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "./admin.module.css";
import AuctionDetails from "./AuctionDetails";

function Admin() {
  const { auctions, fetchAuctions, bids, fetchBidsByAuctionId } =
    useContext(AuctionContext);
  const [activeAuctions, setActiveAuctions] = useState([]);
  const [closedAuctions, setClosedAuctions] = useState([]);

  useEffect(() => {
    fetchAuctions("", true);
  }, []);

  useEffect(() => {
    //TODO Behöver uppdatera auctions med includeEnded = true
    // fetchAuctions('', true);
    const currentDatetime = new Date();
    const active = auctions.filter(
      (auction) => new Date(auction.EndDate) > currentDatetime
    );
    const closed = auctions.filter(
      (auction) => new Date(auction.EndDate) <= currentDatetime
    );
    setActiveAuctions(active);
    setClosedAuctions(closed);
  }, [auctions]);

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
      {/* <button onClick={() => fetchAuctions("", true)}>Uppdatera</button> */}
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
            <AuctionDetails
              key={auction.AuctionID}
              handleDelete={() => handleDelete(auction)}
              auction={auction}
            />
          ))}
        </tbody>
      </table>
      <h3>Avslutade auktioner</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Slutpris</th>
            <th>Radera</th>
          </tr>
        </thead>
        <tbody>
          {closedAuctions.map((auction, index) => (
            <tr key={index}>
              <td>{auction.Title}</td>
              <td></td>
              <td>
                <button onClick={() => handleDelete(auction)}>Radera</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
