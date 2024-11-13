import styles from "./UserScore.module.css";
import Slider from "@mui/material/Slider";
import { useContext, useState } from "react";
import MediaContext from "../../../../context/MediaContext";

export default function UserScore() {
  const { filters, setFilters } = useContext(MediaContext);
  const [value, setValue] = useState([0, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilters({ ...filters, userScore: { minScore: newValue[0], maxScore: newValue[1] } });
  };

  return (
    <div className={styles.userScore}>
      <p className={styles.header}>User score</p>
      <div className={styles.slider}>
        <Slider getAriaLabel={() => "Minimum distance"} value={value} max={10} onChange={handleChange} valueLabelDisplay="auto" disableSwap />
      </div>
      <div className={styles.minMaxValue}>
        <p>0</p>
        <p>
          {value[0]} - {value[1]}
        </p>
        <p>10</p>
      </div>
    </div>
  );
}
