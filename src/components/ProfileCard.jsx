import styles from "./ProfileCard.module.scss"
import AdditionalText from "./ui/AdditionalText.jsx"
import ImportantText from "./ui/ImportantText.jsx"

const ProfileCard = ({ profileName, profileImage, modes, mode, setMode, ...props}) => {
    const entriesModes = Object.entries(modes)
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileInfo}>
                <img className={styles.profileImage} src={profileImage} alt="Profile Image">
                </img>
                <AdditionalText className={styles.preNameText}>Report for</AdditionalText>
                <ImportantText className={styles.nameText}>{profileName}</ImportantText>
            </div>
            <div className={styles.modesWrapper}>
                {
                entriesModes.map(([modeKey, modeValue]) => {
                    const classes = mode == modeValue 
                    ? [styles.switchModeButton, styles.isActive] 
                    : [styles.switchModeButton]
                    return (
                        <button key={modeKey} type="button" aria-label={`Switches mode to ${modeValue}`}
                                className={classes.join(' ')} onClick={() => setMode(modeValue)}>
                                    {modeValue}
                        </button>
                    )})
                }
            </div>
        </div>
    )
}

export default ProfileCard