import PropTypes from "prop-types";
import styles from "./WeatherIcon.module.css";

const WeatherIcon = ({ src, alt }) => {
  return (
    <>
      <img
        src={`${process.env.REACT_APP_ICON_URL}/${src}.png`}
        className={styles.icon}
        alt={alt}
      />
    </>
  );
};

WeatherIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default WeatherIcon;
