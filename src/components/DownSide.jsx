import React from 'react'

const DownSide = ({Image,Name,price,color}) => {
  return (
    <div className='col-12 col-md-4 chand'>

        <div className='p-1'>
            <div className={`border  shadow-sm p-3 ${color}`}>

            <img src={Image}  alt="" className='Ihari' />
            <h3> {Name}</h3>
            <p>{price}</p>
            <button className='btn bg-white w-100 rounded-0'>Add To Cart</button>
            </div>

        </div>
      
    </div>
  )
}

export default DownSide
