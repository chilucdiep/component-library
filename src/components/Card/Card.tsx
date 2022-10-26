import styles from './Card.module.scss'

type CardProps = {
    children?: React.ReactNode;
    title: string
}

export function Card({children, title}: any) {
    return (
    <section className={styles.Card}>
        <div className={styles.Header}>
            <div className={styles.TitleSection}>
                <span className={styles.Title}>{title}</span>
            </div>
        </div>
        <div className={styles.Main}>{children}</div>
    </section>
    )
}