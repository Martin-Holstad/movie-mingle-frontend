import styles from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Rating(props) {
  const { rating } = props;
  const maxRating = 10;
  const roundedRating = rating?.toFixed(1);

  return (
    <div className={styles.ratingContainer}>
      <FontAwesomeIcon icon={faStar} />
      <div>
        <span className={styles.rating}>{roundedRating}</span>
        <span>/</span>
        <span className={styles.maxRating}>{maxRating}</span>
      </div>
    </div>
  );
}
