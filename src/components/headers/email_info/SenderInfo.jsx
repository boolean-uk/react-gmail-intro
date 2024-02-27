import PropTypes from "prop-types";

function SenderInfoComponent({sender, email}) {
  return (
    <div className="sender-info">
      <h2>{sender}</h2>
      <em>&lt;{email}&gt;</em>
    </div>
  )
}

SenderInfoComponent.propTypes = {
  sender: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SenderInfoComponent