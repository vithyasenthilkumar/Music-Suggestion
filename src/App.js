import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FileUploadComponent from './components/FileUploadComponent/FileUploadComponent';
import SongGalleryComponent from './components/SongGalleryComponent/SongGalleryComponent';
import HeartRateComponent from './components/HeartRateComponent/HeartRateComponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1>Harmonize Your Heart Rate With Music</h1>

        <nav className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/admin/upload'>Add Songs</Link>
          <Link to='/heartrate'>Heart Rate Suggestion</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<SongGalleryComponent />} />
          <Route path='/admin/upload' element={<FileUploadComponent />}/>
          <Route path='/heartrate' element={<HeartRateComponent />}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
