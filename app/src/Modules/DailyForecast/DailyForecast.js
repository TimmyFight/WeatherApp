import PropTypes from "prop-types";
import styles from "./DailyForecast.module.css";

const DailyForecast = ({ data }) => {
  return <section className={styles.dailyForecast}>{data.cod}</section>;
};

DailyForecast.propTypes = {
  data: PropTypes.object,
};

export default DailyForecast;
