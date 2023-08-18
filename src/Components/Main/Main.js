import MainBody from './MainBody'
import MainHeader from './MainHeader'
import MainToolbar from './MainToolbar'

function Main() {
    return (<main className="email-view">
        <MainToolbar/>
        <MainHeader />
        <MainBody />   
    </ main>
    )
}

export default Main