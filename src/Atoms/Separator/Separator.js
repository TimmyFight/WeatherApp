import PropTypes from "prop-types";

const Separator = ({ type }) => {
  return <span>&nbsp;{type === "middleDot" ? "•" : "/"}&nbsp;</span>;
};

Separator.propTypes = {
  type: PropTypes.string,
};

export default Separator;
