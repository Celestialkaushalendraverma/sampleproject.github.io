import React, { useState } from 'react'

function Categories () {
  return (
    <div className='about-container'>
      <h1 className='about-title'>Higher-order components</h1>
      <div style={{textAlign: '-webkit-center'}}>
        <HOCRed cmp={Counter} />
        <HOCGray cmp={Counter} />
      </div>
    </div>
  )
}

function HOCRed (props) {
  return (
    <h1 style={{ width: 100, backgroundColor: 'red' }}>
      <props.cmp />
    </h1>
  )
}

function HOCGray (props) {
    return (
      <h1 style={{ width: 100, backgroundColor: 'gray' }}>
        <props.cmp />
      </h1>
    )
  }

function Counter () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  )
}

export default Categories
