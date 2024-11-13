import { useContext, useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import getReviews from "../../../actions/getRequests/getReviews";
import formatDate from "../../../helpers/formatDate";
import DetailsContext from "../../../context/DetailsContext";
import Content from "./content";

export default function Reviews() {
  const { mediaType, media } = useContext(DetailsContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let results = [];

        results = await getReviews(mediaType, media.id);

        results.results = results.results.slice(0, 2);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [media]);

  return reviews.results && reviews.results.length > 0 ? (
    <div className={styles.reviews}>
      <h2>Reviews ({reviews.total_results})</h2>
      {reviews.results.map((review, index) => {
        return (
          <div key={index} className={styles.reviewsDetails}>
            <div className={styles.author}>
              <div className={styles.image}>{review.author_details.avatar_path ? <img src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`} alt="avatar" /> : <FontAwesomeIcon icon={faUser} />}</div>
              <div>
                <h3>{`A review by ${review.author_details.username}`}</h3>
                <p>
                  Written by {review.author_details.username} on {formatDate(review.created_at)}
                </p>
              </div>
            </div>
            <Content review={review} />
          </div>
        );
      })}
      <div className={styles.readAllReviews}>Read all reviews</div>
    </div>
  ) : (
    ""
  );
}
