import styles from "./Tv.module.css";
import Card from "./Card";

export default function Tv(props) {
  return (
    <div>
      <p className={styles.header}>Tv Shows</p>
      <div className={styles.cards}>
        {props.searchResults.results.map((data, index) => {
          return data.media_type === "tv" ? <Card key={index} id={data.id} media_type={data.media_type} title={data.name} src={data.poster_path} alt="movie" /> : "";
        })}
      </div>
    </div>
  );
}
