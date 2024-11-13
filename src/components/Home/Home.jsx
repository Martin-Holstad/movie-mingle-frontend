import styles from "./Home.module.css";
import SearchBar from "../common/SearchBar/SearchBar";
import Trending from "./Trending";
import Popular from "./Popular";
import FreeToWatch from "./FreeToWatch";
export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
      <Trending />
      <Popular />
      <FreeToWatch />
    </main>
  );
}
