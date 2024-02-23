import React from 'react'

import rubbishButton from '../..//assets/icons/rubbish-bin-delete-button.png'


class WriteEmail extends React.Component {
    render() {
      return(
        <div id="writeEmailContainer"> 
    
        <textarea  name="writeEmail" rows={10} cols={100} />
        <div id= "iconContainer">
        <ul>
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
            
          </ul>
          </div>
      </div>
        )
      }
    }

    export default WriteEmail;