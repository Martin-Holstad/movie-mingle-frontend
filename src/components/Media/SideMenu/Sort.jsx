import styles from "./Sort.module.css";
import MediaContext from "../../../context/MediaContext";
import { useContext } from "react";
export default function Sort() {
  const { filters, setFilters } = useContext(MediaContext);

  function handleSelect(event) {
    setFilters({ ...filters, sortBy: event.target.value });
  }

  return (
    <div className={styles.sort}>
      <p>Sort</p>
      <label htmlFor="sortBy">Sort results by</label>
      <select name="sortBy" id="sortBy" onChange={handleSelect}>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="vote_average.desc">Rating Descending</option>
        <option value="vote_average.asc">Rating Ascending</option>
        <option value="release_date.desc">Release Date Descending</option>
        <option value="release_date.asc">Release Date Ascending</option>
        <option value="title.asc">Title (A-Z)</option>
        <option value="title.desc">Title (Z-A)</option>
      </select>
    </div>
  );
}
