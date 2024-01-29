import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './HeartRateComponent.css'

function App() {
  const [heartRate, setHeartRate] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    setHeartRate(parseInt(event.target.value));
  };

  const handleClose = () => setShowModal(false);

  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:3500/api/v1/music/${heartRate}`);
    const result = await response.json();
    setSuggestions(result.suggestions);
    setShowModal(true);
  };

  return (
    <div className='form-container'>
        <h2>Heart Rate Beat Suggestion</h2>

        <div className='form-group'>
            <label>Enter Your Heart Rate Here</label>
            <input type='number' id='heartrate' value={heartRate} onChange={handleInputChange}/>
        </div>
        <div>
      <button onClick={handleSubmit}>Get Song Suggestions</button>
</div>
      <Modal show={showModal} onHide={handleClose}>
        <div className='highlight'>
          <Modal.Title>Song Suggestions</Modal.Title>
        </div>
        <Modal.Body>
          {suggestions.length > 0 ? (
            suggestions.map((song, index) => <p key={index}>{song}</p>)
          ) : (
            <p>No suggestions available</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
