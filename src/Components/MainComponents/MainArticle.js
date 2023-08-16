import MainArticleBody from './MainArticleBody/MainArticleBody'
import MainArticleTitle from './MainArticleTitle/MainArticleTitle'
import MainArticleHeader from './MainArticleHeader/MainArticleHeader'


function MainArticle (){
  return <article className="email-content">
 <MainArticleTitle />
 <MainArticleHeader />
 <MainArticleBody />
</article>
}
export default MainArticle