import './left-menu.css'
function LeftMenuItem (){
    return (
        <nav className="left-menu">
        <ul className="inbox-list">
        <li className="item">
            <span className="label">Starred</span>
            <span className="count">2</span>
          </li>
        </ul>
      </nav>
        
    )

}

export default LeftMenuItem