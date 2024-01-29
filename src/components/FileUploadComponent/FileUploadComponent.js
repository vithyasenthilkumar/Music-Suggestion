import React, { useState } from 'react'
import './FileUploadComponent.css'

function FileUploadComponent() {
    const [selectedFile,setSelectedFile] = useState(null)
    const [fileData, setFileData] = useState(null)

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const handleFileUpload = async(event) => {
        event.preventDefault()
        if (!selectedFile)
        {
            alert('Select a file, and then upload')
        }
        
        const formData = new FormData()
        formData.append('file', selectedFile)
        try{
            const response = await fetch('http://localhost:3500/api/v1/music/upload', {
                method:'POST',
                body:formData,
            })
            setFileData(response)

            if (response.status === 500)
            {
                alert(`File upload was not successfull`)
                window.location.href='/admin/upload'
            }
            else
            {
                alert(`File upload was successfull`)
                window.location.href='/'
            }
        }
        catch(error){
            console.log('Error while uploading the file', error)
        }
    }

  return (
    <form className='form-container' onSubmit={handleFileUpload}>
        <h2>Upload New Files</h2>

        <div className='form-group'>
            <label>Upload the file here</label>
            <input type='file' onChange={handleFileChange}/>
        </div>
        <div>
            <button type='submit'>Upload</button>
        </div>
    </form>
  )
}

export default FileUploadComponent