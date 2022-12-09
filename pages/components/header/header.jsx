import Logo from "./logo"
import Nav from "components/nav"

export default function Header (){
    return (
        <header>
            <div className={style.flexContainer}>
            <logo boxOn/>
            <Nav />
            </div>
        </header>
    )
}