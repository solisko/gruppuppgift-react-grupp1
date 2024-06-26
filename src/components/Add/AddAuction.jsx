import { useState } from "react";
import styles from "../Add/addauction.module.css";

export default function AddAuction() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [StartingPrice, setStartingPrice] = useState("");
  const [CreatedBy, setCreatedBy] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    const hours = `${now.getHours()}`.padStart(2, "0");
    const minutes = `${now.getMinutes()}`.padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auctionData = {
      Title,
      Description,
      StartDate,
      EndDate,
      StartingPrice,
      CreatedBy,
    };

    try {
      const response = await fetch(
        "https://auctioneer2.azurewebsites.net/auction/1zyx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(auctionData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.timeLog("Auction created successfully!");
      setSuccessMsg(true);
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setStartingPrice("");
      setCreatedBy("");
    } catch (error) {
      console.error("There was an error creating the auction:", error.message);
    }
  };

  return (
    <div>
      {successMsg && <h2 style={{ color: "green" }}>Auktionen skapad!</h2>}
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="title" className={styles.labels}>
            Titel:
            <input
              type="text"
              placeholder="Skriv titel här..."
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={styles.inputs}
            />
          </label>
          <label htmlFor="description" className={styles.labels}>
            Beskrivning:
            <textarea
              placeholder="Beskriv artikeln här..."
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={styles.inputs}
            />
          </label>
          <label htmlFor="startDate" className={styles.labels}>
            Starttid:
            <input
              type="datetime-local"
              value={StartDate}
              min={getCurrentDateTime()}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className={styles.inputs}
            />
          </label>
          <label htmlFor="endDate" className={styles.labels}>
            Sluttid:
            <input
              type="datetime-local"
              value={EndDate}
              min={StartDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className={styles.inputs}
            />
          </label>
          <label htmlFor="startprice" className={styles.labels}>
            Start pris:
            <input
              type="number"
              placeholder="Summa..."
              value={StartingPrice}
              onChange={(e) => setStartingPrice(e.target.value)}
              required
              className={styles.inputs}
            />
          </label>
          <label htmlFor="creator" className={styles.labels}>
            Skapad av:
            <input
              type="text"
              placeholder="Skriv ditt namn..."
              value={CreatedBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              required
              className={styles.inputs}
            />
          </label>
          <button className={styles.createBtn} type="submit">
            Skapa auktion
          </button>
        </form>
      </div>
    </div>
  );
}
