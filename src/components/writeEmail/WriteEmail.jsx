import React from 'react'
import '../../styles/WriteEmail/WriteEmail.css'
import rubbishButton from '../..//assets/icons/rubbish-bin-delete-button.png'


class WriteEmail extends React.Component {
    render() {
      return(
        <div id="writeEmailContainer"> 
    
        <textarea  name="writeEmail" rows={10} cols={100} />
        <div id= "mainContainer">
        <ul>
          <div>
            <li>
              <button id="sendButton">Send</button>
            </li>
          </div>
          <div id="iconContainer">
              <li >
                <img className="icon" src={rubbishButton} alt="delete button" />
              </li>
              <li>
                <img className="icon" src={rubbishButton} alt="delete button" />
              </li>
              <li>
                <img className="icon" src={rubbishButton} alt="delete button" />
              </li>
              <li>
                <img className="icon" src={rubbishButton} alt="delete button" />
              </li>
              <li>
                <img className="icon" src={rubbishButton} alt="delete button" />
              </li>
            </div>
          </ul>
          </div>
      </div>
        )
      }
    }

    export default WriteEmail;