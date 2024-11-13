import styles from "./Cast.module.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DetailsContext from "../../context/DetailsContext";

export default function Cast() {
  const { media, mediaType } = useContext(DetailsContext);

  return media.credits && media.credits.cast.length > 0 ? (
    <div className={styles.cast}>
      <h2>{mediaType === "movie" ? "Top Billed Cast" : "Series Cast"}</h2>
      <div className={styles.cards}>
        {media.credits.cast.map((cast, index) => {
          return (
            <div key={index} className={styles.card}>
              <Link to={`/person/details/${cast.id}`}>
                <div className={styles.castImage}>{cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="cast" /> : <FontAwesomeIcon icon={faUser} />}</div>
                <h3>{cast.name.slice(0, 32)}</h3>
                <p>{cast.character.slice(0, 32)}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
