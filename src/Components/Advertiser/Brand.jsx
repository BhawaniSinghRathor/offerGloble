import React from 'react';
import './Brand.css';
import { brandData } from '../Advertiser/Branddata.js';





const Quality = () => {
    return (

        <div>
            <div className='brand-main'>

                <div className='brand-container'>
                    {brandData.map((data) =>
                        <div className='container-brand'>
                            <div className='row'>
                                <div className='f-coll'>
                                    <div className='f-col-inner'>
                                        <span>
                                            <img src={data.image} alt="" className='brand-img' />
                                        </span>
                                        <h2 className='brand-h2'>{data.title}</h2>
                                        <p className='brand-p'>{data.peragraph}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Take your brand to the next level */}
            <div className='take-main'>
                <div className='take-container'>
                    <div className='take-head'>
                        <h2 className='take-h2'>Take your brand to the next level</h2>
                        <p className='take-p'>Offerglobe delivers high-quality traffic and targeted global reach, while following strict compliance and quality assurance standards.</p>
                        <button className='take-button'> Become Publisher</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Quality;
