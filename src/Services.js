import React from 'react';

const Service = () => {

  return (
    <>
      <section className="card-section">
        <div className="common-heading">
          <p className='common-subheading mb-2'>Services</p>
          <h1>What I DO</h1>
        </div>
        <div className="card-container grid grid-two-column ">
          <div className="card service-card">
            <div className="card-body">
              <div className="icon my-4">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h1 className='my-4'>Web Development</h1>
              <p className="hero-para my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea animi amet, perferendis vel error sapiente. Et repudiandae voluptatibus sapiente.</p>
            </div>
          </div>
          <div className="card service-card">
            <div className="card-body">
              <div className="icon my-4">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h1 className='my-4'>Mobile Design</h1>
              <p className="hero-para my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea animi amet, perferendis vel error sapiente. Et repudiandae voluptatibus sapiente.</p>
            </div>
          </div>
          <div className="card service-card">
            <div className="card-body">
              <div className="icon my-4">
                <i className="fa-brands fa-figma"></i>
              </div>
              <h1 className='my-4'>Figma Design</h1>
              <p className="hero-para my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea animi amet, perferendis vel error sapiente. Et repudiandae voluptatibus sapiente.</p>
            </div>
          </div>
          <div className="card service-card">
            <div className="card-body">
              <div className="icon my-4">
                <i className="fa-solid fa-database"></i>
              </div>
              <h1 className='my-4'>Rest API</h1>
              <p className="hero-para my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea animi amet, perferendis vel error sapiente. Et repudiandae voluptatibus sapiente.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;
