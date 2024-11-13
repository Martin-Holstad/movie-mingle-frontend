import styles from "./People.module.css";
import Card from "./Card";

export default function People(props) {
  return (
    <div>
      <p className={styles.header}>People</p>
      <div className={styles.cards}>
        {props.searchResults.results.map((data, index) => {
          return data.media_type === "person" ? <Card key={index} id={data.id} media_type={data.media_type} title={data.name} src={data.profile_path} alt="movie" /> : "";
        })}
      </div>
    </div>
  );
}
