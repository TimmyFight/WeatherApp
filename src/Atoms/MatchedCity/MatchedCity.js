import styles from "./MatchedCity.module.css";

const MatchedCity = ({ city }) => {
  return (
    <p className={styles.matchedCity} data-lat={city.lat} data-lon={city.lon}>
      {city.name} ({city.country})
    </p>
  );
};

export default MatchedCity;
