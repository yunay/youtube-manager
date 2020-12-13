import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Helpers } from '../common/Helpers';
import { AudioPlayerResult } from '../models/AudioPlayerResult'

interface AudioPlayerProps {
    audioPlayerResult: AudioPlayerResult;
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {

    if (props.audioPlayerResult) {

        return (
            <div id="audio-player" key={props.audioPlayerResult.youtubeResult.id.videoId}>
                <iframe id="ytplayer" itemType="text/html" width="1" height="1"
                    src={`https://www.youtube.com/embed/${props.audioPlayerResult.youtubeResult.id.videoId}?autoplay=1&controls=0&disablekb=1&rel=0`}
                    frameBorder="0"></iframe>
                <div id="audio-player-title">
                    {props.audioPlayerResult?.youtubeResult.snippet.title}
                </div>
                <div id="audio-player-controls">
                    <AudioPlayerControls totalTime={moment.duration(props.audioPlayerResult.contentDetails.duration)} />
                </div>
            </div>
        )
    }

    return null;
}

export default AudioPlayer

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
            <input className="audio-player-range" type="range" id="vol" name="duration" value={currentDuration / 1000} min="0" max={props.totalTime.asSeconds()} />
        </span>
        <span className="audio-player-time">{formatDuration(moment.duration(props.totalTime))}</span>
    </>
}
