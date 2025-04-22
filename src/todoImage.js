import React from 'react'

function TodoImage(props) {
  return (
    <div>
      <div className='col-3 col-sm-3 col-md-3 col-lg-4'>
        <img src={props.link} style={{weigh: "200px", height: "150px"}}/>
        <p>{props.tieude}</p>
        <p>1000</p>
      </div>
    </div>
  )
}

export default TodoImage
