import PropTypes from "prop-types";
import styles from "./InputField.module.css";

const InputField = ({ placeholder, type, name, required }) => {
  return (
    <input
      className={styles.inputField}
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
    />
  );
};

InputField.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  required: false,
};

export default InputField;
