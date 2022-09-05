import styles from "./NavigationBar.module.css";
import TittleH1 from "../../Atoms/TitleH1/TitleH1";
import SearchBar from "../SearchBar/SearchBar";

const NavigationBar = () => {
  return (
    <section className={styles.navigationBar}>
      <TittleH1>WeatherApp</TittleH1>
      <SearchBar />
    </section>
  );
};

export default NavigationBar;
