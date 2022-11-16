import React from 'react';
import './About.css';
import Diamound from '../../Image/banner-img2.jpeg';
import Video from './Video';
import { AboutData } from '../AboutUs/AboutData.js';
import Experience from '../../Image/experience-right.jpeg';

const About = () => {
  return (
    <div>

      <div className='about-title'>
        <div className='about-cain'>
          <img src={Diamound} alt="" className='about-img' />

          <Video />

          <div className='who-container'>
            <div className='who-title'>
              <h2 className='who-h2'> Who We Are </h2>
              <p className='who-p'> Offerglobe offers advertisers an almost limitless opportunity for new lead generation and gives publishers high-growth revenue streams from mobile that are unmatched. Our network includes hundreds of advertisers, publishers and distribution partners all around the globe.We offer higher quality leads, superior analytics, real time tracking, fraud prevention and much more</p>
            </div>
          </div>
        </div>


        {/* Maximize Opportunity.jsx */}


        <div className='features'>
          <div className='maxi-container'>
            <div className='cain'>
              <h2 className='title1'>Maximize Opportunity</h2>
              <p className='title2'>OFFERGLOBE Providing a worldwide level offering to it's advertiser and publisher for their better future. </p>
              <spain className='line'></spain>
              {AboutData.map((data) =>
                <div className='container-cain'>
                  <div className='row'>
                    <div className='f-coll'>
                      <div className='f-col-inner'>
                        <span className='spain'>{data.number}</span>
                        <h2 className='h2'>{data.title}</h2>
                        <p className='p'>{data.peragraph}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Experience */}

        <div className='experience-container'>
          <div className='experience-title'>
            <h2 className='experience-h2'>Experience a better network today!</h2>
            <spain className='experience-spain'></spain>
          </div>
          <div className='experience-row'>
            <div className='experience-left'>
              <img src={Experience} alt="" className='experience-img' /></div>
            <div className='experience-right'>
              <p className='experience-p'>Offerglobe makes sure that advertisers receive a high quantity of         high-quality calls that are targeted towards their business needs. Our integrated targeting         technology efficiently connects brands with the right
                audiences thereby paying the way for higher ROIs on your campaigns. It runs efficient and scalable performance campaigns which help you to generate high ROI on pay per call online marketing efforts.
                <br />
                <br />

                Publishers get paid for leads referrals need to stay on the line for at 30 seconds to 3 minutes depending on offer to offer.Commission margins are usually high and they vary from as low as $4 to as high as $500 per valid
                call depending upon the offer and the country from which the referral traffic is directed. At Offerglobe, every publisher gets the individualized support that he or she needs to earn big payouts. We're always improving
                our system and developing new tools to make it even easier to work with us. We know our success is tied to the success of our publishers - and when we work together, everyone wins.
                <br />
                <br />

                Our Pay Per Call tracking solutions enable publishers to promote advertiser products and services through a variety of distribution channels via unique, trackable, toll-free numbers. Pay Per Call is a great method for
                increasing conversion rates on high-end products and complex services that require more consultative, personal engagement to sell.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
