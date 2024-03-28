import styles from "../Item/auctionitem.module.css";

export default function AuctionItem({ auctions }) {
  return (
    <>
      {auctions.length ? (
        auctions.map((auction, index) => (
          <div className={styles.auctionCard} key={index}>
            <h2>{auction.Title}</h2>
            <p>{auction.Description}</p>
            <p>Starttid budgivning: {auction.StartDate} </p>
            <p>Sluttid budgivning: {auction.EndDate} </p>
            <h3>Start pris: {auction.StartingPrice}</h3>
            <p>Upplagd av {auction.CreatedBy}</p>
          </div>
        ))
      ) : (
        <div>Finns inga auktioner att visa.</div>
      )}
    </>
  );
}
