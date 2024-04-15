import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "./admin.module.css";

function Admin() {
  const {
    activeAuctions,
    closedAuctions,
    fetchAuctions,
    bids,
    fetchBidsByAuctionId,
  } = useContext(AuctionContext);

  useEffect(() => {
    fetchAuctions("", true);
  }, []);

  const handleDelete = async (auctionId) => {
    const url = `https://auctioneer2.azurewebsites.net/auction/1zyx/${auctionId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
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
              <td></td>
              <td>{new Date(auction.EndDate).toLocaleDateString("sv-SE")}</td>
              <td>
                {/* {hasBids(auction) ? (
                  <button disabled>Radera</button>
                ) : (
                  <button onClick={() => handleDelete(auction)}>Radera</button>
                )} */}
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
            <th>Bud</th>
            <th>Slutpris</th>
            <th>Radera</th>
          </tr>
        </thead>
        <tbody>
          {closedAuctions.map((auction) => (
            <tr key={auction.AuctionID}>
              <td>{auction.Title}</td>
              <td></td>
              <td>{new Date(auction.EndDate).toLocaleDateString("sv-SE")}</td>
              <td>
                {/* {hasBids(auction) ? (
                  <button disabled>Radera</button>
                ) : (
                  <button onClick={() => handleDelete(auction)}>Radera</button>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
