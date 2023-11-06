import React, { useContext } from 'react'
import { Globalinfo } from './Contextapi'

const Contextsuperchild = () => {
    const {superappColor} = useContext(Globalinfo);
  return(
    <div>
        <h2 style={{color: superappColor}}>Contextsuperchild</h2>
    </div>
  )
}

export default Contextsuperchild;
