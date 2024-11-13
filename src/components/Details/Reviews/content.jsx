import styles from "./content.module.css";

export default function content(props) {
  const { review } = props;

  function handleReadTheRest() {}

  return (
    <div className={styles.content}>
      {review.content
        .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
        .split("|")
        .slice(0, 5)
        .map((sentence, index) => (
          <p key={index} className={styles.sentence}>
            {sentence}
          </p>
        ))}
      <p className={styles.readTheRestButton} onClick={() => handleReadTheRest()}>
        Read the rest
      </p>
    </div>
  );
}
