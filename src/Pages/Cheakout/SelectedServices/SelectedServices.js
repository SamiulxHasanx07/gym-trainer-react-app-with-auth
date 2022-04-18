import React from 'react';
import SingleSelect from './SingleSelect/SingleSelect';

const SelectedService = () => {
    const services = [
        {
            id: 1,
            service: "Daily Workout",
            price: '200',
            img: 'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-1.jpg',
            description: 'If youre struggling to find thoughtful, well-researched fitness blogs on the Internet—we get it. While a decade ago youd have been hard-pressed to find any good sites, today,'
        },
        {
            id: 2,
            service: "Body Fitness",
            price: '750',
            img: 'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-2.jpg',
            description: 'Having some inspiration is often the best way to motivate yourself towards your fitness goals. Most of the top influencers in the fitness industry have a rags'
        },
        {
            id: 3,
            service: "Weight Loss",
            price: '999',
            img: 'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-3.jpg',
            description: ' Most of the top influencers in the fitness industry have a rags to riches story when it comes to fitness, and can provide examples of pushing personal boundaries and achieving what no one thought possible.'
        }
    ]
    return (
        <div>
            <h2 className='sec-title'>Selected Services</h2>
            <div>
                <div className="single-service py-5 rounded-3">
                    {
                       services.map(selectedService=><SingleSelect key={selectedService.id} selectedService={selectedService}></SingleSelect>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectedService;