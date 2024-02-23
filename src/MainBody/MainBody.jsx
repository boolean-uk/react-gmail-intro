import '../styles/MainBody.css'

import Toolbar from './Toolbar';
import EmailContent from './EmailContent';
import Reply from '../Reply/Reply';

function MainBody() {
    return (
        <main className="email-view">
        <Toolbar />
        <EmailContent />
        <Reply />
      </main>
    )
}

export default MainBody;