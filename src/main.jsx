import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './HeaderComponent.jsx'
import LeftMenu from './LeftMenu.jsx'
import Main from './MainComponent.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className = "app">
    <Header />
    <LeftMenu />
    <Main />
    </div>
  </React.StrictMode>,
)
