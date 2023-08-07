import PropTypes from 'prop-types';
import style from './style.module.css';

const Button = ({ children, type = 'button', ...props }) => {
  return (
    <button type={type} className={style.button} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

export default Button;
