import styles from "./MatchedCities.module.css";
import MatchedCity from "../../Atoms/MatchedCity/MatchedCity";

const MatchedCities = ({ data }) => {
  return (
    <section className={styles.matchedCities}>
      {data[0].map((element, index) => {
        return <MatchedCity city={element} key={index} />;
      })}
    </section>
  );
};

export default MatchedCities;
