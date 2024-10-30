import React from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {
    
        const pricingOptions = [
          {
            "id": 1,
            "name": "Basic",
            "price": 29,
            "features": [
              "Access to gym equipment",
              "Locker access",
              "1 group class per month",
              "Open gym hours only"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": 49,
            "features": [
              "Access to gym equipment",
              "Locker access",
              "Unlimited group classes",
              "Open gym hours + extended hours",
              "1 personal training session per month"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": 79,
            "features": [
              "Access to gym equipment",
              "Locker and towel service",
              "Unlimited group classes",
              "24/7 access",
              "3 personal training sessions per month",
              "Access to pool and sauna"
            ]
          },
        
        ]
      
      
    return (
        <div className='m-16 '>
            <h2 className='text-4xl'>Best price in town</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
              pricingOptions.map(option => <PriceOption option={option}></PriceOption>)
            }
          </div>
        </div>
    );
};

export default PriceOptions;