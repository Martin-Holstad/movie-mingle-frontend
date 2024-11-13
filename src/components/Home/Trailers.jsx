import styles from "./Trailers.module.css";
import { useEffect, useState } from "react";
import getLatestTrailers from "../../actions/getRequests/getLatestTrailers";
import Carousel from "./Carousel";

export default function Trailers() {
  const [trailers, setTrailers] = useState([]);
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    (async () => {
      try {
        const data = await getLatestTrailers(category);

        setTrailers(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div className={styles.container}>
      <Carousel header="Free To Watch">
        <div data-role="button" onClick={() => setCategory("movie")}>
          Movies
        </div>
        <div data-role="button" onClick={() => setCategory("tv")}>
          TV
        </div>
        <div className={styles.cards}>
          {trailers?.map((data, index) => {
            console.log(trailers[index]);

            return (
              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.image}>
                    <img src="" alt="" />
                  </div>
                  <div className={styles.cardBody}>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
}
