import Header from './header/header'
import Body from './body/body'

import './emailContent.css'

function EmailContent() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <Header />
      <Body />
    </article>
  )
}

export default EmailContent