import styles from "./Pagination.module.css";
import { useContext, useState } from "react";
import MediaContext from "../../context/MediaContext";
import getMedia from "../../actions/getRequests/getMedia";

export default function Pagination() {
  const { mediaType, mediaCategory, media, setMedia, filters, setFilters } = useContext(MediaContext);

  const [pageResults, setPageResults] = useState([]);
  async function loadMore() {
    try {
      const currentFilters = filters;

      currentFilters.page = currentFilters.page + 1;
      const data = await getMedia(mediaType, mediaCategory, currentFilters);

      setMedia([...media, ...data.results]);
      setPageResults(data.results);
      setFilters(currentFilters);
    } catch (error) {
      console.log(error);
    }
  }

  return media.length === 20 || pageResults.length === 20 ? (
    <div className={styles.loadMoreButton} onClick={loadMore}>
      Load more
    </div>
  ) : (
    <div className={styles.loadMessage}>No more shows to load</div>
  );
}
