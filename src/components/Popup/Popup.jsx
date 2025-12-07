import { useState } from "react"

function Popup(props) {
  
  return(
    <div 
      className="popup"
      onMouseLeave={props.onMouseLeave}
    >
      <img className="img" src={props.image} alt={props.alt || ""} />
    </div>
  )
}

export default Popup
