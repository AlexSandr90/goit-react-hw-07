import classes from './CustomButton.module.css';
import PropTypes from 'prop-types';

const CustomButton = ({ buttonText = '', ...otherProps }) => {
  return (
    <button className={classes.customBtn} {...otherProps}>
      {buttonText}
    </button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
