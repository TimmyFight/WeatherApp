import styles from "./SearchBar.module.css";

const SearchBar = ({ children }) => {
  return <section className={styles.searchBar}>{children}</section>;
};

export default SearchBar;
