import React from 'react'
import { YoutubeResult } from '../models/YoutubeResult'

interface VideoResultColumnProps {
    result: YoutubeResult;
}

const VideoResultColumn: React.FC<VideoResultColumnProps> = (props) => {

    return (
        <div className="card mb-3 ">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img className="card-img video-result-col-image" alt="no image" 
                    src={props.result.snippet.thumbnails.default.url}  
                    width={props.result.snippet.thumbnails.default.width}
                    height={props.result.snippet.thumbnails.default.height} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title video-result-col-title">{props.result.snippet.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoResultColumn
