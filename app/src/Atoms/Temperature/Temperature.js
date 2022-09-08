import styles from "./Temperature.module.css";

const Temperature = ({ children }) => {
  const roundTemperature = (children) => {
    let roundedTemperature = parseFloat(children).toFixed(0);
    return roundedTemperature;
  };

  return (
    <p className={styles.temperature}>{roundTemperature(children)}&#8451;</p>
  );
};

export default Temperature;
