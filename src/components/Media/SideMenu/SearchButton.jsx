import { useContext } from "react";
import styles from "./SearchButton.module.css";
import MediaContext from "../../../context/MediaContext";
import getMedia from "../../../actions/getRequests/getMedia";

export default function SearchButton() {
  const { setMedia, mediaCategory, mediaType, filters } = useContext(MediaContext);

  async function handelSearch() {
    try {
      const results = await getMedia(mediaType, mediaCategory, filters);

      setMedia(results.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.button} onClick={handelSearch}>
      Search
    </div>
  );
}
