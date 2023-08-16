import Title from "./Title"
import HeaderContent from "./HeaderContent"
import SectionBody from "./sectionBody"
import SectionActions from "./sectionActions"
import '../../styles/article.css'

function Article() {
    return <article className='email-content'>
        <Title/>
        <HeaderContent/>
        <SectionBody/>
        <SectionActions/>
    </article>
}
export default Article