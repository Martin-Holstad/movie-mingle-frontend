import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

export default function Card(props) {
  const { media_type, id, src, alt, title } = props;

  return (
    <Link to={`/${media_type}/details/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.image}>{src ? <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} /> : <FontAwesomeIcon icon={faImage} />}</div>
        <li>{title}</li>
      </div>
    </Link>
  );
}
