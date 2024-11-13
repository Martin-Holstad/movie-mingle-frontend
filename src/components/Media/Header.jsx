import styles from "./Header.module.css";
import { useContext } from "react";
import MediaContext from "../../context/MediaContext";

export default function Header() {
  const { mediaType, mediaCategory } = useContext(MediaContext);

  let headerString = "";
  if (mediaType === "movie") {
    headerString = "Movies";
  } else {
    headerString = "TV Shows";
  }

  function h1() {
    let heading = "";

    switch (mediaCategory) {
      case "popular":
        heading = `Popular ${headerString}`;
        break;
      case "now-playing":
        heading = `Now Playing ${headerString}`;
        break;
      case "upcoming":
        heading = `Upcoming ${headerString}`;
        break;
      case "top-rated":
        heading = `Top Rated ${headerString}`;
        break;
      case "airing-today":
        heading = `${headerString} Airing Today`;
        break;
      case "on-tv":
        heading = `Currently Airing ${headerString}`;
        break;
      default:
        heading = "Unknown";
    }

    return heading;
  }

  return <h1 className={styles.h1}>{h1()}</h1>;
}
