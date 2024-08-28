import { useState } from "react";
import Hamburger from "./Hamburger";
import { menu } from "../../data/menu";



export default function Menu() {
  const [active, setActive] = useState(false);

  const hamburgerClick = () => {
    setActive(!active);
  }
  return (
    <>
      <Hamburger active={active} manejarClick={hamburgerClick}/>
      <ul className={`Menu ${active ? 'is-active' : ''}`}>
        {
          menu.map((item) => (
            <li key={item.name}>

              <a className="" href={`#${item.name}`}>{item.title}</a>
              {
                item.other&& (<> & <a className="" href={`#${item.other}`}>{`${item.otherTitle}`}</a></>)
              }

            </li>
          ))
        }
      </ul>
    </>
  )
}
