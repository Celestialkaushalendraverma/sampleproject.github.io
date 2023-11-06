import React, { useContext } from 'react'
import { Globalinfo } from './Contextapi'
import Contextsuperchild from './Contextsuperchild'

const Contextchild = () => {
    const {appColor} = useContext(Globalinfo);
  return(
    <div>
        <h2 style={{color: appColor}}>Contextchild</h2>
        <Contextsuperchild />
    </div>
  )
}

export default Contextchild;
