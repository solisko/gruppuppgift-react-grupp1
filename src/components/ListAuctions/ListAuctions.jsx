import { useContext } from "react";
import { AuctionContext } from "../../Context/AuctionProvider";

export default function ListAuctions() {
  const { auctions } = useContext(AuctionContext);
  return (
    <>
      {auctions.length ? (
        <div>
          {fetchAll.map((auction, index) => (
            <div key={index}>{auction.Title}</div>
          ))}
        </div>
      ) : (
        <div>Finns inga auktioner.</div>
      )}
    </>
  );
}
