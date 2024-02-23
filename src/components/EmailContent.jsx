import '../componentStyles/EmailContent.css'


import ContentActions from './ContentActions'
import ContentBody from './ContentBody'
import ContentHeader from './ContentHeader'
import ContentReply from './ContentReply'
import ContentTitle from './ContentTitle'


function EmailContent() {
    return (
    <article className="email-content">
        <ContentTitle />
        <ContentHeader />
        <ContentBody />
        <ContentActions />
        <ContentReply />
      </article>
    )
}

export default EmailContent