import moment from 'moment';
import React from 'react';
import { AudioPlayerResult } from '../models/AudioPlayerResult';
import AudioPlayerControls from './AudioPlayerControls';

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