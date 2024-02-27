import PropTypes from "prop-types"

function IconComponent( { source, buttonText }) {
  return (
    <li>
      <img className="icon" src={source} alt={buttonText} />
    </li>
  )
}

IconComponent.propTypes = {
  source: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default IconComponent