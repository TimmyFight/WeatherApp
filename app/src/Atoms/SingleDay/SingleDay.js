import styles from "./SingleDay.module.css";
import TitleH2 from "../TitleH2/TitleH2";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherDescription from "../WeatherDescription/WeatherDescription";
import Temperature from "../Temperature/Temperature";
import Separator from "../Separator/Separator";

const SingleDay = ({ day }) => {
  const getDayName = (fullDate) => {
    return new Date(fullDate).toLocaleString("en-us", { weekday: "long" });
  };
  return (
    <section className={styles.dailyForecast}>
      <TitleH2>{getDayName(day[0].dt_txt)}</TitleH2>
      {console.log("day: ", day)}
      <WeatherIcon
        src={day[4].weather[0].icon}
        alt={day[4].weather[0].description}
      />
      <WeatherDescription>
        Night <Temperature>{day[0].main.temp_min}</Temperature>
        <Separator type="middleDot" />
        Day <Temperature>{day[0].main.temp_max}</Temperature>
      </WeatherDescription>
    </section>
  );
};

export default SingleDay;
