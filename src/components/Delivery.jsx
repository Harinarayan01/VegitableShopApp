import React from 'react'
import Process1 from '../assets/images/process1.png';
import Process3 from '../assets/images/process3.png';
import Process2 from '../assets/images/process2.png';
const Delivery = () => {
  return (
    
  <div class="container px-4 py-5 delivery-process chandi">
  <h2 className='text-center display-4  mt-4 fw-bold'>How Delivery Works</h2>
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="col px-5  text-center">
      <div class="mb-3">
        <img src={Process1} className='w-50 h-50'/>
      </div>
      <h5>Pick Your Veg</h5>
      <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi.</p>
      
    </div>
    <div class="col px-5  text-center">
      <div class="mb-3">
        <img src={Process2} className='w-50  h-50'/>
      </div>
      <h5>We Deliver the Bag</h5>
      <p>Gumbo beet greens corn soko endive gumbo gourd parsley</p>
      
    </div>
    <div class="col px-5 text-center">
      <div class="mb-3">
       <img src={Process3} className='w-50 h-50'/>
        
      </div>
      <h5>You Enjoy Your Veg</h5>
      <p>Dandelion cucumber earthnut pea peanut soko zucchini</p>
    </div>
  </div>
</div>
  )
  
}

export default Delivery
