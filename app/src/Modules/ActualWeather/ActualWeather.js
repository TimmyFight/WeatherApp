import PropTypes from "prop-types";
import styles from "./ActualWeather.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import Temperature from "../../Atoms/Temperature/Temperature";
import WheatherDescription from "../../Atoms/WeatherDescription/WeatherDescription";
import Separator from "../../Atoms/Separator/Separator";
import WetherIcon from "../../Atoms/WeatherIcon/WeatherIcon";

const ActualWeather = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.actualWeather}>
      <TitleH2 className={styles.header}>{data.name}</TitleH2>
      <Temperature size={"large"}>{data.main.temp}</Temperature>
      <section className={styles.columns}>
        <WheatherDescription firstUpperCase={true}>
          {data.weather[0].description}
        </WheatherDescription>
        <WetherIcon
          src={data.weather[0].icon}
          alt={data.weather[0].description}
        />
      </section>
      <WheatherDescription>
        Min <Temperature>{data.main.temp_min}</Temperature>
        <Separator type="middleDot" />
        Max <Temperature>{data.main.temp_max}</Temperature>
      </WheatherDescription>
    </section>
  );
};

ActualWeather.porpTypes = {
  data: PropTypes.object,
};

export default ActualWeather;
