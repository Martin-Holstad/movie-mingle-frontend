import styles from "./Poster.module.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import formatRuntime from "../../../helpers/formatRuntime";
import formatDate from "../../../helpers/formatDate";
import DetailsContext from "../../../context/DetailsContext";
import Rating from "../../common/Rating/Rating";
import PlayTrailerButton from "./PlayTrailerButton";
import CreditsList from "./CreditsList";

export default function Poster() {
  const { media } = useContext(DetailsContext);

  return (
    <div className={styles.poster}>
      <div className={styles.posterContent}>
        <div className={styles.posterImage}>{media.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`} alt="poster" /> : <FontAwesomeIcon icon={faImage} />}</div>
        <div className={styles.posterDetails}>
          <div className={styles.h1Container}>
            <h1>{media.title ? media.title : media.name}</h1>
            <Rating rating={media.vote_average} />
          </div>
          <div className={styles.genre}>
            {media.genres?.map((genre, index) => {
              return <li key={index}>{genre.name}</li>;
            })}
          </div>
          <div className={styles.dateAndRuntime}>
            <p>Release Date: {formatDate(media.release_date ? media.release_date : media.first_air_date)}</p>
            <p>{media.runtime ? "-" : ""}</p>
            <p>{media.runtime ? formatRuntime(media.runtime) : ""}</p>
          </div>
          <PlayTrailerButton />
          <div className={styles.overview}>
            <h2>Overview</h2>
            <p>{media.overview ? media.overview : "This show don't have any overview in our databse"}</p>
          </div>
          <CreditsList />
        </div>
      </div>
    </div>
  );
}
