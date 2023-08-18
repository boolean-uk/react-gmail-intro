import "./header.css"
import Nav from "./Nav"
import Search from "./Search"

function Header () {
	return (
		<div className="header">
			<Nav />
			<Search />
		</div>
	)
}

export default Header