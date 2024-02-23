import '../styles/Body.css'
import Toolbar from './BodyToolbar'
import Header from './BodyViewHeader'
import ViewBody from './BodyViewBody'
import Actions from './BodyViewActions'
import Reply from './BodyReply'


function Body() {
    return (
        <main className="email-view">
            <Toolbar />
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
            <Header />
            <ViewBody />
            <Actions />
            <Reply />
        </article>
      </main>
    )
}

export default Body;