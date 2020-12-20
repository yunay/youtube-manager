import moment from "moment"
import React from "react"
import { useEffect, useState } from "react"
import { Helpers } from "../common/Helpers"

interface AudioPlayerControlsProps {
    totalTime: moment.Duration;
}

const AudioPlayerControls: React.FC<AudioPlayerControlsProps> = (props) => {

    const [currentDuration, setCurrentDuraiton] = useState<number>(0)

    const formatDuration = (duration: moment.Duration) => {
        return `${Helpers.addLeadingZero(duration.minutes().toString(), 2)}:${Helpers.addLeadingZero(duration.seconds().toString(), 2)}`
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentDuraiton(currentDuration + 1000) //1s
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [currentDuration])

    return <>
        <span className="audio-player-time">{formatDuration(moment.duration(currentDuration))}</span>
        <span>
            <input className="audio-player-range" type="range" id="vol" name="duration" 
            step={1}
            value={currentDuration / 1000} min="0" readOnly max={props.totalTime.asSeconds()} />
        </span>
        <span className="audio-player-time">{formatDuration(moment.duration(props.totalTime))}</span>
    </>
}

export default AudioPlayerControls;