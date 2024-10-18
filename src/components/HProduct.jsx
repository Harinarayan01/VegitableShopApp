import React from 'react'

const HProduct = ({image1 ,image2,title,text}) => {
  return (
    <div className="col ">
    <div className="card shadow-sm">
     <img src={image1} alt="" style={{height:"200px"}}/>

      <div className="card-body d-flex ">
         <img src={image2} alt=""  className=' w-25 h-25'/>
       <p>
        <strong>{title}</strong>
        <p>{text}</p>
       </p>
      </div>
    </div>
  </div>
  )
}

export default HProduct
