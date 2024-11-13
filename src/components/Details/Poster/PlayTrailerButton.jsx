import styles from "./PlayTrailerButton.module.css";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import DetailsContext from "../../../context/DetailsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faFilm } from "@fortawesome/free-solid-svg-icons";

export default function PlayTrailerButton() {
  const { modalOpen, setModalOpen, setModlaContent } = useContext(AppContext);
  const { media } = useContext(DetailsContext);

  function playTrailer(videos) {
    let officialTrailer = "";
    officialTrailer = videos.find((trailer) => trailer.name === "Official Trailer");

    if (!officialTrailer) officialTrailer = videos[0];

    setModalOpen(!modalOpen);
    setModlaContent(<iframe title={officialTrailer.name} className={styles.trailer} src={`https://www.youtube.com/embed/${officialTrailer.key}`} allowFullScreen></iframe>);
  }

  return (
    <button className={`${styles.trailerButton} ${media.videos?.results.length > 0 ? "" : styles.hide}`} onClick={() => playTrailer(media.videos.results)}>
      <FontAwesomeIcon className={styles.playIcon} icon={faPlay} />
      <p>Play Trailer</p>
      <FontAwesomeIcon className={styles.filmIcon} icon={faFilm} />
    </button>
  );
}
