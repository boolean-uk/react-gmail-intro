import MainEmailToolbar from './MainEmailToolbar'
import MainEmailContent from './MainEmailContent'

import '../css-components/Main.css'

function Main() {

    return (
        <main className="email-view">
        <MainEmailToolbar></MainEmailToolbar>
        <MainEmailContent></MainEmailContent>
      </main>
    )
}

export default Main