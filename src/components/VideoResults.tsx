import React, { useState } from 'react'
import VideoResult from './VideoResult'
import { YoutubeResult } from '../models/YoutubeResult'
import VideoResultGrid from './VideoResultGrid'
import ReactPlayer from 'react-player'

interface VideoResultsProps {
    results: YoutubeResult[];
}

const VideoResults: React.FC<VideoResultsProps> = (props) => {

    if (props.results && props.results.length > 0) {

        return <div id="video-results">
            {props.results.map((result, index) => <div className="video-result" key={index}><VideoResult result={result} key={index} /></div>)}
        </div>
    }

    return null;
}

export default VideoResults
