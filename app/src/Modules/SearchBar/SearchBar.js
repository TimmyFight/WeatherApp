import styles from "./SearchBar.module.css";
import InputField from "../../Atoms/InputField/InputField";

const SearchBar = ({ children }) => {
  return (
    <section className={styles.searchBar}>
      <InputField type="text" name="city" placeholder="Find a city" />
      {children}
    </section>
  );
};

export default SearchBar;
