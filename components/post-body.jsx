import styles from "../styles/post-body.module.css"

export default function postBody({children}){
    return(
        <div className={styles.stck}>
            {children}
        </div>
    )
}