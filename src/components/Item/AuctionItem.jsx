import styles from "../Item/auctionitem.module.css";

export default function AuctionItem({ auctions }) {
  return (
    <>
      {auctions.length ? (
        <div>
          {auctions.map((auction, index) => (
            <div className={styles.auctionCard} key={index}>
              <h1>{auction.Title}</h1>
              <p>{auction.Description}</p>
              <p>Starttid budgivning: {auction.StartDate} </p>
              <p>Sluttid budgivning: {auction.EndDate} </p>
              <h3>Start pris: {auction.StartingPrice}</h3>
              <p>Upplagd av {auction.CreatedBy}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Finns inga auktioner att visa.</div>
      )}
    </>
  );
}
