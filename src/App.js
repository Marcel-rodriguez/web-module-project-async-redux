import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Universities from './components/Universities';

function App() {
  const [data, setData] = useState([])
  // const [text, setText] = useState('')

  useEffect(() => {
    axios.get(`http://universities.hipolabs.com/search?country=United+States`)
    .then(resp => {
       setData(resp.data)
    }).catch(err => console.error(err))
  }, [])

  // const handleTextInput = (e) => {
  //     setText(e.target.value)
  // }

  return (
    <div className="App">
      <h2>Find a random university!</h2>
      <Universities/>
      <h2>List of united states universities</h2>
      <div className='data-container'>
        {data.map(uni => {
          return <>
          <p> | {uni.name} |</p>
          </>
        })}
      </div>
    </div>
  );
}

export default App;