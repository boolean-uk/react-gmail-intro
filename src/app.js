import './styles/app.css';
import './styles/header.css';
import './styles/left-menu.css';
import './styles/email-toolbar.css';
import './styles/title.css';
import './styles/email-content.css';
import './styles/email-action-icons.css';
import './styles/email-body.css';
import './styles/email-actions.css';

import Header from './header.js'
import Menu from './menu.js'
import EmailToolbar from './email-toolbar.js'
import EmailContent from './email-content.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    </div>
  )
}

export default App
