import styles from "./SearchBar.module.css";
import InputField from "../../Atoms/InputField/InputField";
import ButtonSearch from "../../Atoms/ButtonSearch/ButtonSearch";

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <InputField type="text" name="search" placeholder="Search" />
      <ButtonSearch />
    </section>
  );
};

export default SearchBar;
