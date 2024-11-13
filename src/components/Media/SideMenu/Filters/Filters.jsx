import styles from "./Filters.module.css";
import ReleaseDate from "./ReleaseDate";
import Genres from "./Genres";
import UserScore from "./UserScore";

export default function Filters() {
  return (
    <div className={styles.filters}>
      <p className={styles.filtersHeader}>Filters</p>
      <ReleaseDate />
      <Genres />
      <UserScore />
    </div>
  );
}
