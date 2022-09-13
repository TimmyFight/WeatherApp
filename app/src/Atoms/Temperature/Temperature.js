import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Temperature.module.css";

const Temperature = ({ children, size }) => {
  const roundTemperature = (children) => {
    let roundedTemperature = parseFloat(children).toFixed(0);
    return roundedTemperature;
  };

  return (
    <p
      className={classnames({
        [styles.temperature]: true,
        [styles.large]: size === "large",
        [styles.small]: size === "small",
      })}
    >
      {roundTemperature(children)}&#8451;
    </p>
  );
};

Temperature.propTypes = {
  children: PropTypes.number,
  large: PropTypes.string,
};

Temperature.defaultProps = {
  large: "small",
};

export default Temperature;
