import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from '../features/dataSlice'
import Spinner from './Spinner'
import PostOfficeResult from './PostOfficeResult'



function Home() {


  const [searchPin,setSearchPin] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  console.log(data);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchPin.length < 6 || searchPin.length > 6){
      alert('Pincode should be of 6 digits only')
      return
    }
    dispatch(fetchData(searchPin))
    setSearchPin('')
  }

  
  
  // useEffect(() => {
  //     if(searchPin.length === 6){
  //     dispatch(fetchData(searchPin))
  //     }
  // },[searchPin])


  return (
    <div >
      <form onSubmit={handleSubmit} className='home'>
        <div>Enter Pincode</div>
        <input type='text'placeholder='Enter Pincode' value={searchPin} onChange={(e) => setSearchPin(e.target.value)}/>
        <button>Lookup</button>
      </form>
        
    </div>
  )
}

export default Home



