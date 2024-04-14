import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "./Admin.module.css";
import AuctionDetails from "./AuctionDetails";

function Admin() {
 const { auctions, fetchAuctions, bids, fetchBidsByAuctionId, deleteAuction } = useContext(AuctionContext);
 const [activeAuctions, setActiveAuctions] = useState([]);
 const [closedAuctions, setClosedAuctions] = useState([]);


 useEffect(() => {
      //TODO Behöver uppdatera auctions med includeEnded = true
      // fetchAuctions('', true);
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
      <button onClick={() => fetchAuctions('', true)}>Uppdatera</button>
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
          {activeAuctions.map((auction) => (
            <AuctionDetails 
              key={auction.AuctionID}
              handleDelete={() => handleDelete(auction)}
              auction={auction} />
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
