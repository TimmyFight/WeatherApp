import PropTypes from "prop-types";
import styles from "./DailyForecast.module.css";
import SingleDay from "../../Atoms/SingleDay/SingleDay";

const DailyForecast = ({ data }) => {
  let day1, day2, day3, day4, day5, separatedForecast;
  const lisOfRecords = data.list;

  const formatDate = (date) => {
    const formatedDate =
      date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
    return formatedDate;
  };

  const seperateDayByDay = (lisOfRecords, day) => {
    const today = new Date();
    today.setDate(today.getDate() + day);
    return lisOfRecords.filter((record) => {
      const recordDate = new Date(record.dt_txt);
      return formatDate(recordDate) === formatDate(today);
    });
  };

  day1 = seperateDayByDay(lisOfRecords, 0);
  day2 = seperateDayByDay(lisOfRecords, 1);
  day3 = seperateDayByDay(lisOfRecords, 2);
  day4 = seperateDayByDay(lisOfRecords, 3);
  day5 = seperateDayByDay(lisOfRecords, 4);

  separatedForecast = [day2, day3, day4, day5];

  return (
    <section className={styles.dailyForecast}>
      {typeof lisOfRecords != "undefined" ? (
        separatedForecast.map((day) => {
          return day.length ? <SingleDay day={day} /> : null;
        })
      ) : (
        <div></div>
      )}
    </section>
  );
};

DailyForecast.propTypes = {
  data: PropTypes.object,
};

export default DailyForecast;
