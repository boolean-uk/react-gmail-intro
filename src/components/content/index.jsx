import { Header } from './header'
import { Toolbar } from './toolbar'
import { Body } from './body'
import { Actions } from './actions'

export function Content() {
    return (
        <main className="email-view">
          <Toolbar />
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <Header />
          <Body />
          <Actions />
        </article>
      </main>
    )
}