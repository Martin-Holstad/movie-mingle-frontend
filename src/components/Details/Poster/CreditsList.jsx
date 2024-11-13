import styles from "./CreditsList.module.css";
import { useContext, useState, useEffect } from "react";
import DetailsContext from "../../../context/DetailsContext";

export default function CreditsList() {
  const { media, mediaType } = useContext(DetailsContext);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    let members = [];

    if (mediaType === "movie" && media.credits) {
      const jobs = ["Director", "Screenplay", "Story", "Writer", "Characters"];
      let filteredCrew = media.credits.crew.filter((member) => jobs.includes(member.job));

      filteredCrew.forEach((member) => {
        const foundIndex = members.findIndex((m) => m.name === member.name);

        if (foundIndex !== -1) {
          members[foundIndex].job = members[foundIndex].job + `, ${member.job}`;
        } else {
          members.push({ name: member.name, job: member.job });
        }
      });
    }

    if (mediaType === "tv" && media.created_by) {
      media.created_by.forEach((member) => {
        members.push({ name: member.name, job: "Creator" });
      });
    }

    setCrew(members);
  }, [media]);

  return (
    <div className={styles.jobs}>
      {crew.map((member, index) => {
        return (
          <div key={index}>
            <p className={styles.name}>{member.name}</p>
            <p className={styles.job}>{member.job}</p>
          </div>
        );
      })}
    </div>
  );
}
