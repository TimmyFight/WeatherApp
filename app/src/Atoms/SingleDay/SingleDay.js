import styles from "./SingleDay.module.css";

const SingleDay = ({ day }) => {
  return (
    <section className={styles.dailyForecast}>
      <h1>{day[0].dt_txt}</h1>
      <p>{day[0].visibility}</p>
    </section>
  );
};

export default SingleDay;
