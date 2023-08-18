import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import LeftMenu from './Components/Header/LeftMenuIcons/LeftMenu'
import Main from './Components/Main/Main'
import './styles/app.css'

function App() {
  return (
    <div className='App'>
     <LeftMenu />
     <Header />
      <Main />
      <Footer />
      </div>
    )
  }

export default App 
