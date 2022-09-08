import styles from "./Temperature.module.css";

const Temperature = ({ children }) => {
  return <p className={styles.temperature}>{children}&#8451;</p>;
};

export default Temperature;
