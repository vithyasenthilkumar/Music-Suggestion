import React, { useEffect, useState } from 'react'

function AudioPlayerComponent({imageURL}) {
    const [audioData, setAudioData] = useState(null)

    useEffect(() => {
        const fetchAudio = async() =>{
            const audioURL = imageURL.split('.')[0]
            console.log(audioURL);
            try{
                const response = await fetch(`${audioURL}.mp3`)
                const data = await response.blob()
                const audioUrl = URL.createObjectURL(data)
                setAudioData(audioUrl)
            }
            catch(error)
            {
                console.log('Error while fetching songs',error)
            }
        }
        fetchAudio()
    }, [])

  return (
    <div>
        <h3>Music Player</h3>
        {audioData ? (
        <div>
            <audio src={audioData} controls={true} controlsList='nodownload' autoPlay={false}/>
        </div>
        ) : (
            <p> Loading audio ...</p>
            )}
    </div>
  )
}

export default AudioPlayerComponent