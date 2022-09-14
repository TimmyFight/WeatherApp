import PropTypes from "prop-types";
import styles from "./ActualWeather.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import Temperature from "../../Atoms/Temperature/Temperature";
import WheatherDescription from "../../Atoms/WeatherDescription/WeatherDescription";
import Separator from "../../Atoms/Separator/Separator";
import WetherIcon from "../../Atoms/WeatherIcon/WeatherIcon";
import ActualTime from "../../Atoms/ActualTime/ActualTime";
import WindParameters from "../../Atoms/WindParameters/WindParameters";
import Distance from "../../Atoms/Distance/Distance";

const ActualWeather = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.actualWeather}>
      <TitleH2 className={styles.header}>
        {data.name} as of <ActualTime />
      </TitleH2>
      <section className={styles.grip}>
        <section>
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
        <section className={styles.center}>
          <TitleH2>Feels like</TitleH2>
          <Temperature size={"mid"}>{data.main.feels_like}</Temperature>
        </section>
        <section>
          <WheatherDescription>
            Wind:{" "}
            <WindParameters speed={data.wind.speed} direction={data.wind.deg} />
          </WheatherDescription>
          <WheatherDescription>
            Pressure: {data.main.pressure} hPa
          </WheatherDescription>
          <WheatherDescription>
            Humidity: {data.main.humidity}%
          </WheatherDescription>
          <WheatherDescription>
            Visibility: <Distance value={data.visibility} />
          </WheatherDescription>
        </section>
      </section>
    </section>
  );
};

ActualWeather.porpTypes = {
  data: PropTypes.object,
};

export default ActualWeather;
