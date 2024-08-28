import Svg from "../atoms/Svg";
import Menu from "../molecules/Menu";

export default function Header() {
  return (
    <header className={`Header`}>
      <Svg img="logo.svg" alt="logo" cn={`Logo`} />
      <Menu/>
    </header>
  )
}
