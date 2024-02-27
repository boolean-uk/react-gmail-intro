import PropTypes from "prop-types";

function EmailTitleComponent({ title }) {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  )
}

EmailTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EmailTitleComponent