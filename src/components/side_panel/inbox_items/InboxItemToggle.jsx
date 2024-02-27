import PropTypes from "prop-types";

function InboxItemToggle({ label = "hide read", isChecked = false }) {
  return (
    <li className="item toggle">
      <label htmlFor="hide-read">{label}</label>
      <input id="hide-read" type="checkbox" checked={isChecked} />
    </li>
  )
}

InboxItemToggle.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default InboxItemToggle