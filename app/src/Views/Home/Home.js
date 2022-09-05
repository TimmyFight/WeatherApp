import styles from "./Home.module.css";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <section className={styles.appBody}>
      <NavigationBar />
    </section>
  );
};

export default Home;
