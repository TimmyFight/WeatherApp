import PropTypes from "prop-types";
import React, { useEffect } from "react";
import classnames from "classnames";
import styles from "./WindParameters.module.css";

const WindParameters = ({ speed, direction }) => {
  const roundSpeed = (speed) => {
    let roundedSpeed = parseFloat(speed).toFixed(0);
    return roundedSpeed;
  };

  const directionTransform = () => {
    const directionContainer = document.querySelector(".directionArrow");
    directionContainer.style.transform = `rotate(${direction}deg)`;
  };

  useEffect(() => {
    directionTransform();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <span>{roundSpeed(speed)} m/s</span>
      <span
        className={classnames({
          [styles.direction]: true,
          directionArrow: true,
        })}
      ></span>
    </>
  );
};

WindParameters.propTypes = {
  speed: PropTypes.number,
  direction: PropTypes.number,
};

export default WindParameters;
