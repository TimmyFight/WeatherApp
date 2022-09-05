import styles from "./SearchBar.module.css";
import InputField from "../../Atoms/InputField/InputField";
import ButtonSearch from "../../Atoms/ButtonSearch/ButtonSearch";

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <InputField type="text" name="city" placeholder="Find a city" />
      <ButtonSearch value="geoLocation" title="Use Geo Location" />
    </section>
  );
};

export default SearchBar;
