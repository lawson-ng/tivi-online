import React from 'react'
import VideoPlayer from './Video'

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'https://thvli-live2.admon.com.vn/thvli/thvl1-abr/playlist.m3u8',
    type: 'video/mp4'
  }]
}
const App = () => {
  return (
    <div>
        <h1>Tivi</h1>
        <VideoPlayer { ...videoJsOptions } />
    </div>
  )
}

export default App
