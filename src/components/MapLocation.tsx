import React from 'react'

const MapLocation = () => {
  return (
    <div className='mt-5'>
      <div>
        <h1 className='text-center'>तुमचा जवळचा पुणे पोलीस चौकी शोधा</h1>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1673936826156!5m2!1sen!2sin" 
        width="100%" height="550px" style={{border:"0"}} loading="lazy" ></iframe>
    </div>
    </div>
    
  )
}

export default MapLocation;