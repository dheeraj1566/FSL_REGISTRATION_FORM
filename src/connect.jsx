import axios from 'axios';
import React, { useEffect, useState } from 'react'

function connect() {
    const [data, setData]= useState(null);

    useEffect(()=>{
        axios.get('http://localhost:9090')
        .then(responce=>{})
    })
  return (
    <div>connect</div>
  )
}

export default connect