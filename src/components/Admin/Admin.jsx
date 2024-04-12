import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "./Admin.module.css";

function Admin() {
 const { auctions, bids, fetchBidsByAuctionId, deleteAuction } = useContext(AuctionContext);
 const [activeAuctions, setActiveAuctions] = useState([]);
 const [closedAuctions, setClosedAuctions] = useState([]);


 useEffect(() => {
      const currentDatetime = new Date();
      const active = auctions.filter(auction => new Date(auction.EndDate) > currentDatetime);
      const closed = auctions.filter(auction => new Date(auction.EndDate) <= currentDatetime);
      setActiveAuctions(active);
      setClosedAuctions(closed);
 }, [auctions]);

 async function handleDelete(auction) {
  try {
    await deleteAuction(auction);
  } catch (error) {
    console.error('Error deleting auction', error);
  }
 }

 return (
    <div className={styles.table}>
      <h3>Öppna auktioner</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Bud</th>
            <th>Slutdatum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activeAuctions.map((auction, index) => (
            <tr key={auction.AuctionID}>
              <td>{auction.Title}</td>
              <td>Saknar bud</td>
              <td>{auction.EndDate}</td>
              <td><button onClick={() => handleDelete(auction)}>Radera</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Avslutade auktioner</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Slutpris</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {closedAuctions.map((auction, index) => (
            <tr key={index}>
              <td>{auction.Title}</td>
              <td>Avlsutades utan några bud</td>
              <td><button>Radera</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default Admin;
