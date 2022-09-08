import styles from "./ActualWeather.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import Temperature from "../../Atoms/Temperature/Temperature";

const ActualWeather = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.actualWeather}>
      <TitleH2 className={styles.header}>{data.name}</TitleH2>
      <Temperature>{data.main.temp}</Temperature>
    </section>
  );
};

export default ActualWeather;
