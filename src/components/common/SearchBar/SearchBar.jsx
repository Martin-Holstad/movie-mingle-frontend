import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import getSearch from "../../../actions/getRequests/getSearch";
import Menu from "./Menu";

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();

  async function search(value) {
    try {
      setSearchValue(value);
      const results = await getSearch(value);
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setSearchValue("");
  }, [location]);

  return (
    <div className={styles.searchBar}>
      <label>Search for a movie, tv show or person</label>
      <div className={styles.inputContainer}>
        <input name="searchBar" id="searchBar" autoComplete="off" type="text" placeholder="Search for a movie, tv show or person..." value={searchValue} onChange={(event) => search(event.target.value)} />
        <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
        {searchResults.results && searchValue.trim() !== "" ? <Menu searchResults={searchResults} /> : ""}
        <div className={styles.clearButton} onClick={() => setSearchValue("")}>
          Clear
        </div>
      </div>
    </div>
  );
}
