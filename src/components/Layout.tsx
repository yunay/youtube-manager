import moment from 'moment'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AudioPlayerResult } from '../models/AudioPlayerResult'
import { YoutubeResult } from '../models/YoutubeResult'
import { YoutubeService } from '../services/YoutubeService'
import AudioPlayer from './AudioPlayer'
import SearchBar from './SearchBar'
import Topbar from './Topbar'
import VideoResults from './VideoResults'

const Layout = () => {

  const [results, loadResults] = useState<YoutubeResult[]>();
  const [audioPlayerResult, setAudioPlayerResult] = useState<AudioPlayerResult>();
  const youtubeService = new YoutubeService();

  const onResultSelectedCallback = (result: YoutubeResult) => {

    if (!result) {
      setAudioPlayerResult(null)
    } else {
      youtubeService.getVideoId(result.id.videoId).then(results => {
        if (results && results.length > 0) {
          let contentDetails = results[0].contentDetails
          let audioResult = new AudioPlayerResult(result, contentDetails, moment.duration(), true);
          setAudioPlayerResult(audioResult);
        } else {
          setAudioPlayerResult(null);
        }
      })
    }
  }

  const onCloseCallback = () => {
    setAudioPlayerResult(null);
  }

  return (<>
    <Topbar />
    <ToastContainer />
    <SearchBar onSearch={onSearch} />
    <VideoResults results={results} onResultSelected={onResultSelectedCallback} />
    <AudioPlayer audioPlayerResult={audioPlayerResult} onClose={onCloseCallback} />
  </>);

  function onSearch(keyword: string) {

    youtubeService.getVideos(keyword).then(results => {

      loadResults(results)
    });
  }
}

export default Layout