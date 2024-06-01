import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>Explore our diverse regions, each offering a unique blend of culture, history, and natural beauty. From the majestic mountains to the serene coastline, find your perfect getaway in our extensive portfolio of properties.</p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions