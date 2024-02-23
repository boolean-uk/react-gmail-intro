import Title from './Title/Title'
import Header from './Header/Header'
import Body from './Body/Body'
import Actions from './Actions/Actions'
import Reply from './Reply/Reply'

function EmailContent() {
  return (
    <article className="email-content">
      <Title />
      <Header />
      <Body />
      <Actions />
      <Reply />
    </article>
  )
}

export default EmailContent
