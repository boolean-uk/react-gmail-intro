

import './styles.css'

import Nav from './Nav'
import EmailContent from './EmailContent'
import NewMessage from './NewMessage'

function MainMain() {
  return (
    <main className="email-view">
      <Nav/>
      <EmailContent/>
      <NewMessage/>
    </main>
  )
}

export default MainMain