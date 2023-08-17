import LeftMenu from './Components/Aside/LeftMenu'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './styles/app.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <LeftMenu />
      <Footer />
      </div>
    )
  }

export default App 
