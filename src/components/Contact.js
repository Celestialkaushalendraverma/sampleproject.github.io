import React, { useState } from 'react'
// import './style/About.css';

function Contact () {
  const [score, setScore] = useState(10)
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Please fiil the comments !")
    }else {
      alert(`Successfully submit form ! 
    Score: ${score} ⭐️
    Comment: ${comment}`)
    }
  }

  return (
    <div className='about-container'>
      <h1 className='about-title'>Create a Controlled Form Component</h1>
      <div style={{ textAlign: '-webkit-center' }}>
        <form style={{ width: '500px', textAlign: 'left' }} onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback form</h2>
            <div style={{ display: 'grid' }}>
              <label style={{ marginLeft: '0px', marginBottom: '20px' }}>
                Score: {score} ⭐️
              </label>
              <input
                type='range'
                min='0'
                max='10'
                value={score}
                onChange={e => setScore(e.target.value)}
              />
            </div>
            <div style={{ display: 'grid' }}>
              <label>Comment: </label>
              <textarea style={{marginTop: '20px', height: '150px'}} value={comment} onChange={e => setComment(e.target.value)}></textarea>
            </div>
            <button
              type='submit'
              style={{ width: '-webkit-fill-available', marginTop: '20px' }}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact
