import React from 'react';
import "./Quality.css";
import { qualityData } from '../Publisher/qualityData.js'




const Quality = () => {
  return (


    <div className='quality-features'>
      <div className='quality-container'>
        {qualityData.map((data) =>
          <div className='container-cain'>
            <div className='row'>
              <div className='f-coll'>
                <div className='f-col-inner'>
                  <span>
                    <img src={data.image} alt="" className='quality-img' />
                  </span>
                  <h2 className='quality-h2'>{data.title}</h2>
                  <p className='quality-p'>{data.peragraph}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Quality;
