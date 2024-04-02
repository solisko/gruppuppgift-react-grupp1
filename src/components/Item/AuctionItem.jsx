import { NavLink } from "react-router-dom";
import styles from "../Item/auctionitem.module.css";

const formatDateTime = (dateTimeStr) => {
  const dateTime = new Date(dateTimeStr);
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedDate}, kl. ${formattedTime}`;
};

export default function AuctionItem({ auctions }) {
  const currentDateTime = new Date();

  return (
    <>
      {auctions.length ? (
        auctions.map((auction, index) => {
          const endDate = new Date(auction.EndDate);
          const isEnded = endDate < currentDateTime;
          return (
            <div className={styles.auctionCard} key={index}>
              <h2>{auction.Title}</h2>
              <img className={styles.image} src="" alt="" />
              <h3>{auction.Description}</h3>
              <p>
                Starttid budgivning:
                <br />
                {formatDateTime(auction.StartDate)}
              </p>
              <p>
                Sluttid budgivning:
                <br />
                {formatDateTime(auction.EndDate)}
              </p>
              <h3>Start pris: {auction.StartingPrice}</h3>
              {isEnded ? (
                <div>
                  <p>Auktion avslutad</p>
                  <button>Se detaljer</button>
                </div>
              ) : (
                <NavLink to="/details">Lägg bud/Se detaljer</NavLink>
              )}
              <p>Upplagd av {auction.CreatedBy}</p>
            </div>
          );
        })
      ) : (
        <div>Finns inga auktioner att visa.</div>
      )}
    </>
  );
}
