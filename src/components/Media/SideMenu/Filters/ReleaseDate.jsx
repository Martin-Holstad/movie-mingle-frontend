import styles from "./ReleaseDate.module.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MediaContext from "../../../../context/MediaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import defaultFilters from "../../defaultFilters";

export default function ReleaseDate() {
  const { mediaType, mediaCategory, filters, setFilters } = useContext(MediaContext);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const location = useLocation();

  useEffect(() => {
    const releaseDate = defaultFilters(mediaCategory).releaseDate;
    setDates(releaseDate.minDate, releaseDate.maxDate);
  }, [location]);

  function setDates(minDate, maxDate) {
    if (minDate instanceof Date) minDate = minDate.toISOString().split("T")[0];
    if (maxDate instanceof Date) maxDate = maxDate.toISOString().split("T")[0];
    setStartDate(minDate);
    setEndDate(maxDate);
    setFilters({ ...filters, releaseDate: { maxDate: maxDate, minDate: minDate } });
  }

  return (
    <div className={styles.releaseDate}>
      <p className={styles.header}>{mediaType === "movie" ? "Release Dates" : "Air Dates"}</p>
      <div className={styles.dates}>
        <div className={styles.dateTo}>
          <p>From:</p>
          <div className={styles.dateInput}>
            <DatePicker selected={startDate} onChange={(minDate) => setDates(minDate, endDate)} placeholderText="Not selected" />
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
        </div>
        <div className={styles.dateFrom}>
          <p>To:</p>
          <div className={styles.dateInput}>
            <DatePicker selected={endDate} onChange={(maxDate) => setDates(startDate, maxDate)} placeholderText="Not selected" />
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
        </div>
      </div>
    </div>
  );
}
