import PropTypes from "prop-types";
import styles from "./InputField.module.css";

const InputField = ({
  placeholder,
  type,
  name,
  required,
  autocomplete,
  onChangeHandler,
  onFocusHandler,
  onBlurHandler,
}) => {
  return (
    <input
      className={styles.inputField}
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      autoComplete={autocomplete}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  );
};

InputField.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  autocomplete: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  required: false,
  autocomplete: "off",
};

export default InputField;
