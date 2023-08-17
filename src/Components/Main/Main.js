import MainBody from './MainBody'
import MainHeader from './MainHeader'
import MainToolbar from './MainToolbar'

function Main() {
    return (<header className='header'>
        <MainToolbar/>
        <MainHeader />
        <MainBody />   
    </header>)
}

export default Main