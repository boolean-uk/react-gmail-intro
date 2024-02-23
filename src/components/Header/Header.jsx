import LeftMenu from "./LeftMenu"
export default function Header() {
  return (
    <header className="header">
      <LeftMenu />

        <div className="search">
          <input className="search-bar" placeholder="Search mail" />
        </div>
      </header>
  )
}