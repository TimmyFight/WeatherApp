import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ButtonSearch.module.css";

const ButtonSearch = ({ children, value, title, onClickHandler }) => {
  return (
    <button
      className={classnames({
        [styles.button]: true,
        [styles.search]: value === "search",
        [styles.geoLocation]: value === "geoLocation",
      })}
      title={title}
      value={value}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

ButtonSearch.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ButtonSearch;
