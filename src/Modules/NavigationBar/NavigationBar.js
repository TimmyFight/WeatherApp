import styles from "./NavigationBar.module.css";
import TittleH1 from "../../Atoms/TitleH1/TitleH1";

const NavigationBar = ({ children }) => {
  return (
    <section className={styles.navigationBar}>
      <TittleH1>WeatherApp</TittleH1>
      {children}
    </section>
  );
};

export default NavigationBar;
