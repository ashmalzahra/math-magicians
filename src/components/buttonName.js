import PropTypes from 'prop-types';

function Button(props) {
  Button.defaultProps = {
    name: '',
    className: '',
    id: '',
    onClick: () => {},
  };
  Button.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
  };
  const {
    name, className, onClick, id,
  } = props;

  return (
    <button type="button" name={name} className={className} id={id} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
