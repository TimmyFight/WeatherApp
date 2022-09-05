import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ButtonSearch.module.css";

const ButtonSearch = ({ children, value }) => {
  return (
    <button
      className={classnames({
        [styles.button]: true,
        [styles.search]: value === "search",
        [styles.geoLocation]: value === "geoLocation",
      })}
      value={value}
    >
      {children}
    </button>
  );
};

ButtonSearch.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ButtonSearch;
