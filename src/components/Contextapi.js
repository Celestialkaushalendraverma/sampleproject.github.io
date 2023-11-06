import React, { createContext } from 'react'
import Contextchild from './contextchild'

export const Globalinfo = createContext()

const Contextapi = () => {
  return (
    <Globalinfo.Provider value={{appColor: 'red', superappColor: 'green'}}>
      <div>
        <h1>Context API</h1>
        <Contextchild />
      </div>
    </Globalinfo.Provider>
  )
}

export default Contextapi
