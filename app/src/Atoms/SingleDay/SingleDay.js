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

  const findTempDay = (option) => {
    let min = day[0].main.temp_min;
    let max = day[0].main.temp_max;
    for (let i = 0; i < day.length; i++) {
      if (day[i].main.temp_min < min) {
        min = day[i].main.temp_min;
      }
      if (day[i].main.temp_max > max) {
        max = day[i].main.temp_max;
      }
    }
    if (option === "min") {
      return min;
    } else if (option === "max") {
      return max;
    }
  };

  return (
    <section className={styles.dailyForecast}>
      <TitleH2>{getDayName(day[0].dt_txt)}</TitleH2>
      <WeatherIcon
        src={day[4].weather[0].icon}
        alt={day[4].weather[0].description}
      />
      <WeatherDescription>
        Night <Temperature>{findTempDay("min")}</Temperature>
        <Separator type="middleDot" />
        Day <Temperature>{findTempDay("max")}</Temperature>
      </WeatherDescription>
    </section>
  );
};

export default SingleDay;
