import styles from "../Item/auctionitem.module.css";

const formatDateTime = (dateTimeStr) => {
  const dateTime = new Date(dateTimeStr);
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${formattedDate}, kl. ${formattedTime}`;
};

export default function AuctionItem({ auctions }) {
  return (
    <>
      {auctions.length ? (
        auctions.map((auction, index) => (
          <div className={styles.auctionCard} key={index}>
            <h2>{auction.Title}</h2>
            <p>{auction.Description}</p>
            <p>Starttid budgivning: {formatDateTime(auction.StartDate)} </p>
            <p>Sluttid budgivning: {formatDateTime(auction.EndDate)} </p>
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
