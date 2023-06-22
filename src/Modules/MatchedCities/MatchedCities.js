import styles from "./MatchedCities.module.css";
import MatchedCity from "../../Atoms/MatchedCity/MatchedCity";

const MatchedCities = ({ data, onClickHandler }) => {
  const listOfCities = data[0];
  let indexToRemove = [];
  let removeDuplicates = listOfCities.map((element) => {
    return element.name + element.country;
  });

  for (let i = 0; i < removeDuplicates.length; i++) {
    if (removeDuplicates.indexOf(removeDuplicates[i]) !== i) {
      indexToRemove.push(i);
    }
  }

  indexToRemove.forEach((element) => delete listOfCities[element]);

  return (
    <section className={styles.matchedCities} onClick={onClickHandler}>
      {listOfCities.map((element, index) => {
        return <MatchedCity city={element} key={index} />;
      })}
    </section>
  );
};

export default MatchedCities;
