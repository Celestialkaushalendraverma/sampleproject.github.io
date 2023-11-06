import React, { useRef, useState } from 'react'
import '../App.css'

const Home = () => {
  const luckyName = useRef(null)
  const [show, setShow] = useState(false)

  const SubmitForm = e => {
    e.preventDefault()
    const name = luckyName.current.value
    name === '' ? alert('Please fill the Data !') : setShow(true);
  }

  return (
    <div className='App'>
      <h1>useRef</h1>
      <form onSubmit={SubmitForm}>
        <div style={{ display: 'grid' }}>
          <label
            style={{
              fontSize: '2rem',
              fontFamily: 'monospace',
              padding: '12px'
            }}
            htmlFor='luckyName'
          >
            Enter your luckyName
          </label>
          <input
            style={{ height: '39px', width: '376px', marginLeft: '706px', fontSize: '1rem' }}
            type='text'
            id='luckyName'
            ref={luckyName}
          />
        </div>
        <button
          style={{
            margin: '10px',
            width: '87px',
            height: '27px',
            fontSize: '1rem'
          }}
        >
          Submit
        </button>
      </form>
      <p style={{fontSize: '2rem',fontFamily: 'monospace',padding: '12px'}}>{show ? `your lucky name is ${luckyName.current.value}` : ''}</p>
    </div>
  )
}

export default Home
