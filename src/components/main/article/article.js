import './article.css'

import Title from './title/title.js'
import Header from './header/header.js'
import SectionOne from './sectionone/sectionone.js'
import SectionTwo from './sectiontwo/sectiontwo.js'

function Article() {
    return (
        <article className="email-content">
            <Title />
            <Header />
            <SectionOne />
            <SectionTwo />
        </article>
    )
}

export default  Article