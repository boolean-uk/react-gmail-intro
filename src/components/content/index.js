import Icons from '../icons'
import Actions from '../actions'
import Body from '../body'
import MailHeader from '../mailHeader'
function Content() {
    return(
    <article className="email-content">
    <div className="title">
      <h1>Welcome to Flaticon</h1>
    </div>
    <MailHeader/>
    <Body/> 
    <Actions/>
  </article> 
    )
}
export default Content