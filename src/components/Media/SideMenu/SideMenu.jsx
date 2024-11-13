import styles from "./SideMenu.module.css";
import Sort from "./Sort";
import WhereToWatch from "./WhereToWatch";
import Filters from "./Filters/Filters";
import SearchButton from "./SearchButton";

export default function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <Sort />
      <WhereToWatch />
      <Filters />
      <SearchButton />
    </div>
  );
}
