import styles from './AdditionalText.module.scss'

const AdditionalText = ({children, className, ...props}) => {
    return (
        <p className={styles.additionalText + " " + className}
           {...props}>
            {children}
        </p>
    )
}

export default AdditionalText