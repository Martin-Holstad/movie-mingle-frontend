import styles from "./Person.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getPersonDetails from "../../actions/getRequests/getPersonDetails";

export default function Person() {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    (async () => {
      try {
        const person = await getPersonDetails(id);
        console.log(person);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div>Person</div>;
}
