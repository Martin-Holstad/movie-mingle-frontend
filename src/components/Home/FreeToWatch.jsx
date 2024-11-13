import styles from "./FreeToWatch.module.css";
import { useEffect, useState } from "react";
import getFreeToWatch from "../../actions/getRequests/getFreeToWatch";
import Carousel from "./Carousel";
import MediaCard from "../common/cards/MediaCard/MediaCard";

export default function FreeToWatch() {
  const [media, setMedia] = useState([]);
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    (async () => {
      try {
        const data = await getFreeToWatch(category);

        setMedia(data.results);
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
          {media?.map((data, index) => {
            return <MediaCard key={index} data={data} mediaType={data.media_type} />;
          })}
        </div>
      </Carousel>
    </div>
  );
}
