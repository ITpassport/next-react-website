import Container from "../../pages/container"
import Logo from "../logo/logo"
import styles from"../footer/footer.module.css"

export default function Footer (){
    return(
        <footer className={styles.wrapper}>
            <Container>
            <div className={styles.flexContainer}>
            <Logo />
            [ソーシャル]
            </div>
            </Container>
        </footer>
    )
}