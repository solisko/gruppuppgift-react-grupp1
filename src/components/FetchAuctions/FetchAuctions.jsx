import { useEffect, useState } from "react";

export default function FetchAuctions() {
  const [fetchAll, setFetchAll] = useState([]);

  useEffect(() => {
    fetch("https://auctioneer.azurewebsites.net/auction/1zyx")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchAll(data);
      });
  }, []);

  return (
    <div>
      {fetchAll.map((auction, index) => (
        <div key={index}>{auction.Title}</div>
      ))}
    </div>
  );
}
