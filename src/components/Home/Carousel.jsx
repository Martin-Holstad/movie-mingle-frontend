import styles from "./Carousel.module.css";
import { Children, useState } from "react";

export default function Carousel(props) {
  const { header, children } = props;
  const [activeButton, setActiveButton] = useState(0);

  function handleButtonClick(index) {
    setActiveButton(index);
  }

  return (
    <>
      <div className={styles.topBar}>
        <h2>{header}</h2>
        <div className={styles.buttons}>
          {Children.map(children, (child, index) => {
            return child.props["data-role"] === "button" ? (
              <div className={`${styles.button} ${activeButton === index ? styles.active : ""}`} onClick={() => handleButtonClick(index)}>
                {child}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className={styles.carousel}>
        {Children.map(children, (child) => {
          return child.props["data-role"] !== "button" ? <>{child}</> : "";
        })}
      </div>
    </>
  );
}
