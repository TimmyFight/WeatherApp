import styles from "./MatchedCity.module.css";

const MatchedCity = ({ city }) => {
  return (
    <p className={styles.matchedCity}>
      {city.name} ({city.country})
    </p>
  );
};

export default MatchedCity;
