import MainNavigation from './MainComponents/MainNavigation'
import MainArticle from './MainComponents/MainArticle'
import './main.css'

function Main (){
  return <main className="email-view">
  <MainNavigation />
  <MainArticle />
</main>
}

export default Main