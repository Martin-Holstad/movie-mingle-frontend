import styles from "./Popular.module.css";
import { useEffect, useState } from "react";
import getPopular from "../../actions/getRequests/getPopularMedia";
import Carousel from "./Carousel";
import MediaCard from "../common/cards/MediaCard/MediaCard";

export default function Popular() {
  const [media, setMedia] = useState([]);
  const [category, setCategory] = useState("streaming");

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopular(category);
        setMedia(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div className={styles.container}>
      <Carousel header="What's Popular">
        <div data-role="button" onClick={() => setCategory("streaming")}>
          Streaming
        </div>
        <div data-role="button" onClick={() => setCategory("onTv")}>
          On TV
        </div>
        <div data-role="button" onClick={() => setCategory("forRent")}>
          For Rent
        </div>
        <div data-role="button" onClick={() => setCategory("inTheaters")}>
          In Theaters
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
