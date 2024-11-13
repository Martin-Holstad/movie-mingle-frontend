import styles from "./Genres.module.css";
import { useContext } from "react";
import MediaContext from "../../../../context/MediaContext";

export default function Genres() {
  const { filters, setFilters } = useContext(MediaContext);

  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Sci-Fi" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  function handleCheckbox(event, genreID) {
    const currentGenres = filters.genres;

    if (event.target.checked) {
      const newGenres = [...currentGenres, { id: genreID }];
      setFilters({ ...filters, genres: newGenres });
    } else {
      const newGenres = currentGenres.filter((genre) => genre.id !== genreID);
      setFilters({ ...filters, genres: newGenres });
    }
  }

  return (
    <div className={styles.genresContainer}>
      <p className={styles.header}>Genres</p>
      <div className={styles.genres}>
        {genres.map((genre, index) => {
          return (
            <div key={index}>
              <input name={`genreCheckbox${index}`} id={`genreCheckbox${index}`} type="checkbox" onChange={(event) => handleCheckbox(event, genre.id)} />
              <label key={index}>{genre.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
