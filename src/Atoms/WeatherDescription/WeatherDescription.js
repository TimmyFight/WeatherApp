import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./WeatherDescription.module.css";

const WeatherDescription = ({ children, firstUpperCase }) => {
  return (
    <p
      className={classnames({
        [styles.description]: true,
        [styles.firstUpperCase]: firstUpperCase,
      })}
    >
      {children}
    </p>
  );
};

WeatherDescription.propTypes = {
  firstUpperCase: PropTypes.bool,
};

WeatherDescription.defaultProps = {
  firstUpperCase: false,
};

export default WeatherDescription;
