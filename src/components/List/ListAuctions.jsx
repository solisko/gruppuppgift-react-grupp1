import { useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "../List/listauctions.module.css";
import AuctionItem from "../Item/AuctionItem";

export default function ListAuctions() {
  const { auctions } = useContext(AuctionContext);
  return (
    <>
      <div className={styles.listContainer}>
        <AuctionItem auctions={auctions} />
      </div>
    </>
  );
}
