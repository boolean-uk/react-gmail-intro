import './styles/App.css'

import Header from './Header'
import MailView from '../Components/MailView'
import LeftMenu from '../Components/LeftMenu'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MailView />      
     </div>
  )
}

export default App
