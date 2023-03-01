import React from 'react';
import Title from './Title';
import {serviceData} from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
 
    <Title title="our" subtitle="services"/>

    <div className="section-center services-center">
      {
        serviceData.map((service) => {
          return <Service key={service.id} {...service} />
        })
      }
    </div>
  </section>
  )
}

export default Services