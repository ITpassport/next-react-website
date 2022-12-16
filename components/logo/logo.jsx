import Link from "next/link"
import styles from "./logo.module.css"
export default function Logo ({boxOn}){
return (
    <Link href="/"
        className={ boxOn ? styles.box : styles.basic}>CUBE
    </Link>
)
}

