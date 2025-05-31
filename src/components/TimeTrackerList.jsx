import TimeTrackerCard from './TimeTrackerCard'

import data from "../../data.json"
import styles from './TimeTrackerList.module.scss'

const TimeTrackerList = ({modes, mode, ...props}) => {
    return (
        <div className={styles.timeTrackerList}>
            {
                data.map(({title, timeframes}) => {
                    return (
                        <TimeTrackerCard key={title} title={title}
                        mode={mode} timeframes={timeframes}/>
                    )
                })
            }
        </div>
    )
}

export default TimeTrackerList