import { useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";

export default function ListAuctions() {
  const { auctions } = useContext(AuctionContext);
  return (
    <>
      {auctions.length ? (
        <div>
          {auctions.map((auction, index) => (
            <div key={index}>{auction.Title}</div>
          ))}
        </div>
      ) : (
        <div>Finns inga auktioner.</div>
      )}
    </>
  );
}
