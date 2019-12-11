import React from 'react'
import VideoItem from './VideoItem'

export const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((v) => {
        return <VideoItem key={v.id.videoId} onVideoSelect={onVideoSelect} video={v} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList 
