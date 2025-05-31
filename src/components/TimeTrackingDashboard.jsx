import { useState } from 'react'
import styles from './TimeTrackingDashboard.module.scss'

import ProfileCard from './ProfileCard'
import TimeTrackerList from './TimeTrackerList'

import profileImage from "../../public/images/image-jeremy.png"

const TimeTrackingDashboard = (props) => {
    const modes = {
        daily: "daily",
        weekly: "weekly",
        monthly: "monthly",
    }
    let [mode, setMode] = useState(modes.weekly)

    return (
        <article className={styles.timeTrackingDashboard}>
            <ProfileCard profileName={"Jeremy Robson"} profileImage={profileImage} modes={modes} 
            mode={mode} setMode={setMode}/>
            <TimeTrackerList modes={modes} mode={mode}/>
        </article>
    )
}

export default TimeTrackingDashboard;