import PropTypes from "prop-types"

function EmailBody({source, alt}) {
  return (
    <section className="email-body">
      <div className="content">
        <img src={source} alt={alt} />
      </div>
    </section>
  )
}
EmailBody.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default EmailBody