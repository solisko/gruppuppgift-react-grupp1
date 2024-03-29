import { useState } from "react";
import styles from "../Add/addauction.module.css";

export default function AddAuction() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input type="text" placeholder="Skriv titel här..." value={title} />
        </label>
        <label htmlFor="description">
          <input
            type="text"
            placeholder="Beskriv artikeln här..."
            value={description}
          />
        </label>
        <label htmlFor="startDate">
          Starttid:
          <input type="text" value={startDate} />
        </label>
        <label htmlFor="endDate">
          Sluttid:
          <input type="text" value={endDate} />
        </label>
        <label htmlFor="startprice">
          Start pris:
          <input type="number" placeholder="Första budet blir..." value={startingPrice} />
        </label>
        <label htmlFor="creator">
          Skapad av:
          <input type="text" placeholder="Skriv ditt namn..." value={createdBy} />
        </label>
        <button type="submit">Skapa auktion</button>
      </form>
    </div>
  );
}
