import { useState } from "react";
import styles from "../Add/addauction.module.css";

export default function AddAuction() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      </form>
    </div>
  );
}
