import React from 'react'
import Email from './Email'
import WriteEmail from '../components/writeEmail/WriteEmail'




class Main extends React.Component {
    render() {
      return(
        <main className="email-view">
            <Email />
            <WriteEmail />
          
        </main>
      ) 
      
      }
    }

    export default Main;