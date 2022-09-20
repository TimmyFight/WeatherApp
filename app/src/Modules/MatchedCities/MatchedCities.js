import styles from "./MatchedCities.module.css";
import MatchedCity from "../../Atoms/MatchedCity/MatchedCity";

const MatchedCities = ({ data }) => {
  return (
    <section className={styles.matchedCities}>
      {data[0].map((element) => {
        return <MatchedCity city={element} key={element.lon} />;
      })}
    </section>
  );
};

export default MatchedCities;
