import PropTypes from "prop-types";

const Distance = ({ value, parentUnit, childUnit }) => {
  let formatedValue = value;
  if (value >= 1000) {
    formatedValue = (value / 1000).toFixed(0) + parentUnit;
  } else {
    formatedValue += childUnit;
  }
  return formatedValue;
};

Distance.propTypes = {
  value: PropTypes.number,
  parentUnit: PropTypes.string,
  childUnit: PropTypes.string,
};

Distance.defaultProps = {
  parentUnit: "km",
  childUnit: "m",
};

export default Distance;
