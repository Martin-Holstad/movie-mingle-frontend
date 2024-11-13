import styles from "./Trending.module.css";
import { useEffect, useState } from "react";
import getTrendingMedia from "../../actions/getRequests/getTrendingMedia";
import Carousel from "./Carousel";
import MediaCard from "../common/cards/MediaCard/MediaCard";

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("day");

  useEffect(() => {
    (async () => {
      try {
        const data = await getTrendingMedia(category);
        setTrending(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div className={styles.container}>
      <Carousel header="Trending">
        <div data-role="button" onClick={() => setCategory("day")}>
          Today
        </div>
        <div data-role="button" onClick={() => setCategory("week")}>
          This Week
        </div>
        <div className={styles.cards}>
          {trending.map((data, index) => {
            return <MediaCard key={index} data={data} mediaType={data.media_type} />;
          })}
        </div>
      </Carousel>
    </div>
  );
}
