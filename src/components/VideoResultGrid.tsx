import React from 'react'
import { YoutubeResult } from '../models/YoutubeResult'
import * as ytdl from 'ytdl-core'
import * as ffmpeg from 'fluent-ffmpeg'
import * as readline from 'linebyline'
var pathToFfmpeg = require('ffmpeg-static');

interface VideoResultGridProps {
    result: YoutubeResult;
    setSelectedVideo: (video: YoutubeResult) => void;
}

const VideoResultGrid: React.FC<VideoResultGridProps> = (props) => {


    const downloadMp3 = async () => {

        console.log(pathToFfmpeg);
        let stream = ytdl.default(props.result.id.videoId, { quality: 'highestaudio' });
        let start = Date.now();

        ffmpeg.default(stream)
            .setFfmpegPath('C:\\Projects\\electron\\youtube-manager\\node_modules\\ffmpeg-static\\ffmpeg.exe').saveToFile(`C:\\music\\${props.result.snippet.title.replace(/\s+/g,'_')}.mp3`)
       
    }

    return (
        <div className="card">
            <img src={props.result.snippet.thumbnails.medium.url} className="card-img-top" alt="no image" onClick={props.setSelectedVideo.bind(this, props.result)} />
            <div className="card-body">
                <h5 className="card-title" onClick={downloadMp3}>{props.result.snippet.title}</h5>
            </div>
        </div>
    )
}

export default VideoResultGrid
