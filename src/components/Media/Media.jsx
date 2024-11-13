import styles from "./Media.module.css";
import { useState, useEffect } from "react";
import MediaContext from "../../context/MediaContext";
import { useLocation } from "react-router-dom";
import getMedia from "../../actions/getRequests/getMedia";
import Header from "./Header";
import MediaCard from "../common/cards/MediaCard/MediaCard";
import SearchBar from "../common/SearchBar/SearchBar";
import SideMenu from "./SideMenu/SideMenu";
import Pagination from "./Pagination ";
import defaultFilters from "./defaultFilters";

export default function Media() {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const mediaType = pathname[1];
  const mediaCategory = pathname[2];

  const [filters, setFilters] = useState(defaultFilters(mediaCategory));
  const [media, setMedia] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMedia(mediaType, mediaCategory, defaultFilters(mediaCategory));

        setMedia(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [mediaType, mediaCategory]);

  return (
    <MediaContext.Provider value={{ media, setMedia, mediaType, mediaCategory, filters, setFilters }}>
      <main className={styles.main}>
        <SearchBar />
        <Header />
        <div className={styles.content}>
          <SideMenu />
          <div className={styles.shows}>
            <div className={styles.cards}>
              {media.map((data, index) => {
                return <MediaCard key={index} data={data} />;
              })}
            </div>
            <Pagination />
          </div>
        </div>
      </main>
    </MediaContext.Provider>
  );
}
