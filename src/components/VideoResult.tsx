import React from 'react'
import { YoutubeResult } from '../models/YoutubeResult'

interface VideoResultProps {
    result: YoutubeResult;
}

const VideoResult: React.FC<VideoResultProps> = (props) => {

    return (
        <div className="video-result-card mb-3 ">
            <div className="video-result-card-img">
                <img className="video-result-col-image" alt="no image"
                    src={props.result.snippet.thumbnails.medium.url}
                    width={props.result.snippet.thumbnails.medium.width}
                    height={props.result.snippet.thumbnails.medium.height} />
            </div>
            <div className="video-result-card-info">
                <h5 className="card-title video-result-col-title">{props.result.snippet.title}</h5>
                <div>🎈🎟🎑🎪</div>
                <div>player</div>
            </div>
        </div>
    )
}

export default VideoResult
