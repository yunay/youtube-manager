import React, { useState } from 'react'
import VideoResult from './VideoResult'
import { YoutubeResult } from '../models/YoutubeResult'
import VideoResultGrid from './VideoResultGrid'
import ReactPlayer from 'react-player'

interface VideoResultsProps {
    results: YoutubeResult[];
    onResultSelected: (result: YoutubeResult) => any
}

const VideoResults: React.FC<VideoResultsProps> = (props) => {

    const onResultSelectedCallback = (result: YoutubeResult) => {
        props.onResultSelected(result)
    }

    if (props.results && props.results.length > 0) {
        return <div id="video-results">
            {
                props.results.map((result, index) => {
                    return <div className="video-result" key={index}>
                        <VideoResult result={result} key={index} onResultSelected={onResultSelectedCallback} />
                    </div>
                })
            }
        </div>
    }

    return null;
}

export default VideoResults
