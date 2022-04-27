import React,{useState} from 'react'
import PropTypes from 'prop-types'

const UseStateHooks= ({value= 10}) => {

  const [counter, setCounter]=useState(value);
  
  const handleAdd=()=>{
      setCounter(counter + 1);
  }

  const handleSubstract = () => setCounter(counter -1);
  
  const handleReset =()=> setCounter(value * 0);

  return (
    <div>


        <h1>Contador</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}> Add Numbers </button>
        <button onClick={handleSubstract}> Rest Numbers </button>
        <button onClick={handleReset}> Reset </button>    
    
    </div>
  )
}

UseStateHooks.propTypes = {
value:PropTypes.number

}

export default UseStateHooks