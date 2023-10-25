import './styles/App.css'
import Header from './components/Header.jsx'
import EmailView from './components/EmailView/EmailView.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import WriteEmail from './components/WriteEmail.jsx'


function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <EmailView></EmailView>
      <WriteEmail></WriteEmail>
    </div>
  )
}

export default App
