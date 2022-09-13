import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Temperature.module.css";

const Temperature = ({ children, size }) => {
  const roundTemperature = (children) => {
    let roundedTemperature = parseFloat(children).toFixed(0);
    return roundedTemperature;
  };

  return (
    <span
      className={classnames({
        [styles.temperature]: true,
        [styles.large]: size === "large",
        [styles.small]: size === "small",
      })}
    >
      {roundTemperature(children)}&#8451;
    </span>
  );
};

Temperature.propTypes = {
  children: PropTypes.number,
  size: PropTypes.string,
};

Temperature.defaultProps = {
  size: "small",
};

export default Temperature;
