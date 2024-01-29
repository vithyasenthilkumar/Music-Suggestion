import React, { useState, useEffect } from 'react'
import './SongGalleryComponent.css'
import ThumbNailComponent from '../ThumbNailComponent/ThumbNailComponent'

function SongGalleryComponent() {
    const [imageData, setImageData] = useState([])

    useEffect(() =>{
        const fetchImages = async() => {
            try{
                const response = await fetch('http://localhost:3500/api/v1/music/')
                const data = await response.json()
                console.log(data)
                setImageData(data)
            }
            catch(error)
            {
                console.log('Error while fetching images',error)
            }
        }

        fetchImages()
    }, [])

  return (
    <div>
        {imageData.length>0 ? (
            <div className='image-container'>
                {imageData.map((imageItem) => (
                    <ThumbNailComponent imageItem={imageItem}/>
                ))}
            </div>
        ): (
            <p>Loading images .....</p>
        )}
    </div>
  )
}

export default SongGalleryComponent