import './styles/App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailToolbar from './components/EmailToolbar';
import EmailContent from './components/EmailContent';
import EmailActions from './components/EmailActions';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
        <EmailActions />
      </main>
    </div>
  )
}

export default App;
