import React, { useState } from 'react'
import { YoutubeResult } from '../models/YoutubeResult'
import ytdl from 'ytdl-core'
import ffmpeg from 'fluent-ffmpeg'

import { remote } from 'electron'

interface VideoResultProps {
    result: YoutubeResult;
    onResultSelected: (result: YoutubeResult) => any;
}

const VideoResult: React.FC<VideoResultProps> = (props) => {

    const [downloadingProcess, setDownloadingProcess] = useState(0)
    const [errorOnDownload, setErrorOnDownload] = useState(false)

    const downloadMP3 = () => {

        remote.dialog.showOpenDialog({ properties: ['openDirectory'], filters: [{ name: "Music", extensions: ["mp3"] }] }).then(result => {

            if (result.filePaths && result.filePaths.length > 0) {

                let stream = ytdl(props.result.id.videoId, { quality: 'highestaudio' });

                ffmpeg(stream)
                    .on('progress', function (progress) {

                        setDownloadingProcess(downloadingProcess + 10)
                    })
                    .on('end', function () {
                        setDownloadingProcess(100)

                        setTimeout(() => {
                            setDownloadingProcess(0)
                        }, 2000);
                    })
                    .on('error', function (err) {
                        setDownloadingProcess(100)
                        setErrorOnDownload(true);
                    })
                    .save(`${result.filePaths[0]}\\${props.result.snippet.title.replace(/\s+/g, '_')}.mp3`);
            }
        })
    }

    const downloadVideo = () => {
        remote.dialog.showOpenDialog({ properties: ['openDirectory'], filters: [{ name: "Video", extensions: ["mp4"] }] }).then(result => {

            if (result.filePaths && result.filePaths.length > 0) {

                let stream = ytdl(props.result.id.videoId, { quality: 'highestvideo' });

                ffmpeg(stream).save(`${result.filePaths[0]}\\${props.result.snippet.title.replace(/\s+/g, '_')}.mp4`);
            }
        })
    }

    const onResultSelected = () => {
        props.onResultSelected(props.result)
    }

    return (
        <>
            <div className="video-result-card">
                <div className="video-result-card-img" onClick={onResultSelected}>
                    <img className="video-result-col-image" alt="no image"
                        src={props.result.snippet.thumbnails.default.url}
                        width={props.result.snippet.thumbnails.default.width}
                        height={props.result.snippet.thumbnails.default.height} />
                </div>
                <div className="video-result-card-info">
                    <h3 className="video-result-col-title">{props.result.snippet.title}</h3>
                    <div>
                        <button className="video-results-button" title="Download mp3" onClick={downloadMP3}>🎵</button>
                        <button className="video-results-button" title="Donwload video" onClick={downloadVideo}>🎬</button>
                    </div>

                </div>
            </div>
            <div className="video-result-progress-bar" style={errorOnDownload
                ? { backgroundColor: "red", width: `${downloadingProcess}%` }
                : { width: `${downloadingProcess}%` }}></div>
        </>
    )
}

export default VideoResult
