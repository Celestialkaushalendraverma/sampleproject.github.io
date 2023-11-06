import React, { useReducer } from 'react'
// import './style/About.css';

const initialState = 0
const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
}

function About () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='about-container'>
      <h1 className='about-title'>useReducer</h1>
      <div>
        <p style={{ margin: '10px', fontSize: '3rem' }}>{state}</p>
        <div style={{ display: 'grid' }}>
          <button
            style={{ height: '35px', width: '150px', marginLeft: '823px' }}
            onClick={() => dispatch({type: 'INCREMENT'})}
          >
            INC
          </button>
          <button
            style={{
              height: '35px',
              width: '150px',
              marginLeft: '823px',
              marginTop: '10px'
            }}
            onClick={() => dispatch({type: 'DECREMENT'})}
          >
            DEC
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
