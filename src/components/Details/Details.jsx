import styles from "./Details.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailsContext from "../../context/DetailsContext";
import getMediaDetails from "../../actions/getRequests/getMediaDetails";
import SearchBar from "../common/SearchBar/SearchBar";
import Poster from "./Poster/Poster";
import Cast from "./Cast";
import Reviews from "./Reviews/Reviews";

export default function Details() {
  const [media, setMedia] = useState("");

  const location = useLocation();
  const pathname = location.pathname.split("/");
  const mediaType = pathname[1];
  const id = pathname[3];

  useEffect(() => {
    (async () => {
      try {
        const media = await getMediaDetails(mediaType, id);
        setMedia(media);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location]);

  return (
    <DetailsContext.Provider value={{ media, mediaType }}>
      <main className={styles.main}>
        <SearchBar />
        <Poster />
        <Cast />
        <Reviews />
      </main>
    </DetailsContext.Provider>
  );
}
