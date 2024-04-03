import { useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import { useLocation } from "react-router-dom";
import styles from "../ItemDetails/itemdetails.module.css";

export default function ItemDetails() {
  const { auctions } = useContext(AuctionContext);
  const location = useLocation();
  const auction = auctions.filter(
    (auct) => auct.AuctionID === location.state.id
  )[0];

  return (
    <>
      {auction && (
        <div className={styles.detailsContainer}>
          <h1>{auction.Title}</h1>
          <img className={styles.image} src="" alt="" />
          <h3>Beskrivning</h3>
          <p>{auction.Description}</p>
          <h3>Start pris: {auction.StartingPrice}</h3>
          <button>Lägg nytt bud</button>
          <section>
            <h2>Alla bud:</h2>
            <table>
              <thead>
                <tr>
                  <th>Bud</th>
                  <th>Budgivare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>300</td>
                  <td>Sofia</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p>Upplagd av {auction.CreatedBy}</p>
        </div>
      )}
    </>
  );
}
