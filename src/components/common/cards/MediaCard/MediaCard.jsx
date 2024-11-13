import styles from "./MediaCard.module.css";
import { Link } from "react-router-dom";
import formatDate from "../../../../helpers/formatDate";

export default function MediaCard(props) {
  const { id, name, title, poster_path, release_date, first_air_date } = props.data;

  return (
    <div className={styles.card}>
      <Link to={`/${release_date ? "movie" : "tv"}/details/${id}`}>
        <div className={styles.image}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movie poster" />
        </div>
        <div className={styles.body}>
          <p className={styles.header}>{name ? name : title}</p>
          <p className={styles.date}>{formatDate(release_date ? release_date : first_air_date)}</p>
        </div>
      </Link>
    </div>
  );
}
