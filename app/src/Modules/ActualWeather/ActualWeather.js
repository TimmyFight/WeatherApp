import PropTypes from "prop-types";
import styles from "./ActualWeather.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import Temperature from "../../Atoms/Temperature/Temperature";
import WheatherDescription from "../../Atoms/WeatherDescription/WeatherDescription";

const ActualWeather = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.actualWeather}>
      <TitleH2 className={styles.header}>{data.name}</TitleH2>
      <Temperature size={"large"}>{data.main.temp}</Temperature>
      <WheatherDescription firstUpperCase={true}>
        {data.weather[0].description}
      </WheatherDescription>
      <WheatherDescription>
        Day <Temperature>{data.main.temp_max}</Temperature> &#183; Night{" "}
        <Temperature>{data.main.temp_min}</Temperature>
      </WheatherDescription>
    </section>
  );
};

ActualWeather.porpTypes = {
  data: PropTypes.object,
};

export default ActualWeather;
