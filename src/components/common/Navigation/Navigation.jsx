import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <DropDownMenu header="Movies">
              <NavLink to="/movie/popular">Popular</NavLink>
              <NavLink to="/movie/now-playing">Now Playing</NavLink>
              <NavLink to="/movie/upcoming">Upcoming</NavLink>
              <NavLink to="/movie/top-rated">Top Rated</NavLink>
            </DropDownMenu>
          </li>
          <li className={styles.li}>
            <DropDownMenu header="Tv">
              <NavLink to="/tv/popular">Popular</NavLink>
              <NavLink to="/tv/airing-today">Airing Today</NavLink>
              <NavLink to="/tv/on-tv">On Tv</NavLink>
              <NavLink to="/tv/top-rated">Top Rated</NavLink>
            </DropDownMenu>
          </li>
          <li className={styles.li}>
            <DropDownMenu header="People">
              <NavLink to="/popular-people">Popular People</NavLink>
            </DropDownMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}
