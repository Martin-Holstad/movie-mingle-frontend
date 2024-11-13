import styles from "./Movie.module.css";
import Card from "./Card";

export default function Movie(props) {
  return (
    <div>
      <p className={styles.header}>Movies</p>
      <div className={styles.cards}>
        {props.searchResults.results.map((data, index) => {
          return data.media_type === "movie" ? <Card key={index} id={data.id} media_type={data.media_type} title={data.title} src={data.poster_path} alt="movie" /> : "";
        })}
      </div>
    </div>
  );
}
