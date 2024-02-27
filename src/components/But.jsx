import React from 'react'

import {Link} from 'react-router-dom';
function But() {
  return (
    <Link to="/page2">
    <button class='btn text-[-200px] text-white mr-auto' style={{"fontSize":"30px",backgroundColor:"black",color:"white",display:'flex', justifyContent:"center",alignItems:"center"}}>Start Now</button>
    </Link>
  )
}

export default But;