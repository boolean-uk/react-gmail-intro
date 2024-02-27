import PropTypes from "prop-types";

function UserInfoComponent({ email }) {
  return (
    <div className="user-info">
    <p>
      to me <em>&lt;{email}&gt;</em>
    </p>
  </div>
  )
}

UserInfoComponent.propTypes = {
  email: PropTypes.string.isRequired,
};


export default UserInfoComponent