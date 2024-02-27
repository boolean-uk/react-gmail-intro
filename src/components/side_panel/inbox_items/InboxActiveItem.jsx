import PropTypes from "prop-types";

function InboxActiveItemComponent({label, count}) {
  return (
    <li className="item active">
      <span className="label">{label}</span>
      <span className="count">{count}</span>
    </li>
  )
}

InboxActiveItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.func.isRequired,
};

export default InboxActiveItemComponent