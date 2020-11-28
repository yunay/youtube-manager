import React, { useState } from 'react'
import { YoutubeResult } from '../models/YoutubeResult'
import { YoutubeService } from '../services/YoutubeService'
import SearchBar from './SearchBar'
import Topbar from './Topbar'
import VideoResults from './VideoResults'

const Layout = () => {

  const [results, loadResults] = useState<YoutubeResult[]>();

  const youtubeService = new YoutubeService();

  return (<>
    <Topbar />
    <div className="mx-auto search-bar">
      <SearchBar onSearch={onSearch} />
    </div>
    <VideoResults results={results} />
  </>
  );

  function onSearch(keyword: string) {

    youtubeService.getVideos(keyword).then(results => {
      loadResults(results)
    });
  }
}

export default Layout