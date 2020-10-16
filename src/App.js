import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {

  const [advice, setAdvice] = useState('')

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        const {advice} = response.data.slip
        console.log(advice)

        setAdvice(advice)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchAdvice()
  }, [advice])


  return (
    <div className="App">
      {advice}
    </div>
  );
}

export default App;
