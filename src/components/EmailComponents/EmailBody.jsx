import React from 'react'
import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import '../../styles/email/EmailBody.css'





class EmailBody extends React.Component {
    render() {
      return(
        <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      ) 
      
      }
    }

    export default EmailBody;