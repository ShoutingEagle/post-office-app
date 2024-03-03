
import './App.css';
import Home from './components/Home';
import PostOfficeResult from './components/PostOfficeResult'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='post-office-list' element={<PostOfficeResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
