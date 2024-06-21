import logo from "../assets/image.png"

export const Header = () => {
  return (
    <header>
        <img className="logo" src={logo} alt="Pic" />
        <a href="/">Home</a>
    </header>
  )
}
