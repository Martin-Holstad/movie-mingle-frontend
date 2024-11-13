import styles from "./WhereToWatch.module.css";
import { useEffect, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import MediaContext from "../../../context/MediaContext";
import getWatchProviders from "../../../actions/getRequests/getWatchProviders";

export default function WhereToWatch() {
  const { mediaType, filters, setFilters } = useContext(MediaContext);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const results = await getWatchProviders(mediaType);

        setProviders(results.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function providerClick(index, id) {
    const currentProviders = filters.providers;

    const providerClicked = isProviderClicked(id);

    if (providerClicked) {
      const newProviders = currentProviders.filter((provider) => provider.provider_id !== id);
      setFilters({ ...filters, providers: newProviders });
    } else {
      currentProviders.push({ provider_id: providers[index].provider_id });
      setFilters({ ...filters, providers: currentProviders });
    }
  }

  function isProviderClicked(id) {
    return filters.providers.find((provider) => provider.provider_id === id);
  }

  return filters?.providers ? (
    <div className={styles.whereToWatch}>
      <p>
        Where To Watch <span className={styles.providersAmount}>({providers.length})</span>
      </p>

      <div className={styles.providers}>
        {providers?.map((provider, index) => {
          const { provider_id, logo_path } = provider;
          return (
            <div key={index} className={`${styles.image} ${isProviderClicked(provider_id) ? styles.selected : ""}`} onClick={() => providerClick(index, provider_id)}>
              <img src={`https://image.tmdb.org/t/p/w500/${logo_path}`} alt="Provider Logo"></img>
              {isProviderClicked(provider_id) ? <FontAwesomeIcon icon={faCheck} /> : ""}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
