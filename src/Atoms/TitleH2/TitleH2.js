import styles from "./TitleH2.module.css";

const TitleH2 = ({ children }) => {
  return <h2 className={styles.titleH2}>{children}</h2>;
};

export default TitleH2;
