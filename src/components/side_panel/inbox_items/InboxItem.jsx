import PropTypes from "prop-types";

function InboxItemComponent({ label, count }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="count">{count}</span>
    </li>
  )
}

InboxItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default InboxItemComponent