import styles from './ImportantText.module.scss'

const ImportantText = ({children, className, ...props}) => {
    return (
        <h3 className={styles.importantText + " " + className} {...props}>
            {children}
        </h3>
    )
}

export default ImportantText