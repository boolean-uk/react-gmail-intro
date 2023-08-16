import './styles/app.css'

import Header from './styles/components/Header/Header'
import LeftMenu from './styles/components/Aside/LeftMenu'
import Main from './styles/components/Main/Main'
import Footer from './styles/components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <LeftMenu />
      <Main />
      <Footer />
      </div>
    )
  }

export default App 
