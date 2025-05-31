import styles from './TimeTrackerCard.module.scss'

import ImportantText from './ui/ImportantText'
import AdditionalText from './ui/AdditionalText'

const modeToTimeFrame = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
}

const TimeTrackerCard = ({title, mode, timeframes, ...props}) => {
    return (
        <div className={[styles.timeTrackerCard, styles[title.replaceAll(' ', '')]].join(' ')}>
            <div className={styles.timeTrackerInfo}>
                <h2 className={styles.title}>{title}</h2>
                <ImportantText className={styles.hours}>
                    {timeframes[mode].current}hrs
                </ImportantText>
                <button type="button" aria-label="Settings" className={styles.settings}>
                </button>
                <AdditionalText className={styles.previousHours}>
                    Last {modeToTimeFrame[mode]} - {timeframes[mode].previous}hrs
                </AdditionalText>
            </div>
        </div>
    )
}

export default TimeTrackerCard