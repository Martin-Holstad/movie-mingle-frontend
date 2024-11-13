import styles from "./Menu.module.css";
import { useRef } from "react";
import Movie from "./Movie";
import Tv from "./Tv";
import People from "./People";

export default function Menu(props) {
  const { searchResults } = props;
  const menuRef = useRef(null);

  return (
    <div className={styles.menu} ref={menuRef}>
      <Movie className={styles.movie} searchResults={searchResults} />
      <Tv className={styles.tv} searchResults={searchResults} />
      <People className={styles.people} searchResults={searchResults} />
    </div>
  );
}
