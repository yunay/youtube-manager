import React, { useState } from 'react'
import { YoutubeResult } from '../models/YoutubeResult'
import ytdl from 'ytdl-core'
import ffmpeg from 'fluent-ffmpeg'
import { remote } from 'electron'
import { Helpers } from '../common/Helpers'

interface VideoResultProps {
    result: YoutubeResult;
    onResultSelected: (result: YoutubeResult) => any;
}

const VideoResult: React.FC<VideoResultProps> = (props) => {

    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isOverlayOn, setIsOverlayOn] = useState(false);

    const downloadMP3 = () => {

        remote.dialog.showOpenDialog({ properties: ['openDirectory'], filters: [{ name: "Music", extensions: ["mp3"] }] }).then(result => {

            if (result.filePaths && result.filePaths.length > 0) {

                let stream = ytdl(props.result.id.videoId, { quality: 'highestaudio' });

                ffmpeg(stream)
                    .on('end', function () {
                        Helpers.notify("Downloading complete!", "success");
                        setIsOverlayOn(true);
                    })
                    .on('error', function (err) {
                        Helpers.notify("Downloading error!", "error");
                        setIsOverlayOn(true);
                    })
                    .save(`${result.filePaths[0]}\\${props.result.snippet.title.replace(/\s+/g, '_')}.mp3`);
            }
        })
    }

    const downloadVideo = () => {
        remote.dialog.showOpenDialog({ properties: ['openDirectory'], filters: [{ name: "Video", extensions: ["mp4"] }] }).then(result => {

            if (result.filePaths && result.filePaths.length > 0) {

                let stream = ytdl(props.result.id.videoId);

                ffmpeg(stream).save(`${result.filePaths[0]}\\${props.result.snippet.title.replace(/\s+/g, '_')}.mp4`);
            }
        })
    }

    const onResultSelected = () => {

        props.onResultSelected(isAudioPlaying ? null : props.result) //If audio is turned on, sent null to stop it.
        setIsAudioPlaying(!isAudioPlaying)
    }

    return (
        <>
            <div className="video-result-card">
                {isOverlayOn && <div className="video-result-overlay"></div>}
                <div className="video-result-card-img" >
                    <img className="video-result-col-image" alt="no image"
                        src={props.result.snippet.thumbnails.default.url}
                        width={props.result.snippet.thumbnails.default.width}
                        height={props.result.snippet.thumbnails.default.height}
                        onClick={onResultSelected} />
                </div>
                <div className="video-result-card-info">
                    <h3 className="video-result-col-title">{props.result.snippet.title}</h3>
                    <div>
                        <button className="video-results-button" title="Download mp3" onClick={downloadMP3}>🎵</button>
                        <button className="video-results-button" title="Donwload video" onClick={downloadVideo}>🎬</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default VideoResult