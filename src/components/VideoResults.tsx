import React, { useState } from 'react'
import VideoResultColumn from './VideoResultColumn'
import { YoutubeResult } from '../models/YoutubeResult'
import VideoResultGrid from './VideoResultGrid'
import ReactPlayer from 'react-player'

interface VideoResultsProps {
    results: YoutubeResult[];
}

const VideoResults: React.FC<VideoResultsProps> = (props) => {

    const [selectedVideo, setSelectedVideo] = useState<YoutubeResult>();

    const renderResults = () => {
        if (selectedVideo) {
            return <>
                <div className="col-7">
                    <ReactPlayer light={true} url={`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`}/>
                </div>
                <div className="col-5">
                    <div className="video-results-col">
                        {props.results.map((result, index) => <VideoResultColumn result={result} key={index} />)}
                    </div>
                </div>
            </>
        } else {
            return props.results.map((result, index) => <div key={index} className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                <VideoResultGrid result={result} key={index} setSelectedVideo={setSelectedVideo} />
            </div>)
        }
    }

    if (props.results && props.results.length > 0) {

        return <div className="container-fluid">
            <div className="row">
                {renderResults()}
            </div>
        </div>
    }

    return null;
}

export default VideoResults
