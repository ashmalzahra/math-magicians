import PropTypes from 'prop-types'

function Button(name, className, onClick){
    Button.defaultProps = {
        name: '',
        className: '',
        onclick : () => {}
    }
    Button.propTypes = {
        name: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
    }

    return (
        <button type="button" name={name} className={className} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button