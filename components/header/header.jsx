import Nav from "../Nav/nav"
import styles from "./header.module.css"

export default function Header (){
    return (
        <header>
            <container large>
            <div className={styles.flexContainer}>
            <logo boxOn/>
            <Nav/>
            </div>
        </container>
        </header>
    )
}