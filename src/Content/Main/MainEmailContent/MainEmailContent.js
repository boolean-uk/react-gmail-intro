
import MainEmailContentHeader from './EmailHeader/EmailHeader'
import MainEmailContentBody from './Body/Body'
import MainEmailContentActions from './Actions/Actions'
import Reply from './Reply/Reply'

function MainEmailContent (){
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <MainEmailContentHeader />
          <MainEmailContentBody />        
          <MainEmailContentActions />
          <Reply />
        </article>
    )
}

export default MainEmailContent