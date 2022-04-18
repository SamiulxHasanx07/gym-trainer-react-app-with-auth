import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css';
import SingleService from './SingleService/SingleService';
const Services = () => {
    const services = [
        {
            id:1,
            service:"Daily Workout",
            price:'200',
            img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-1.jpg',
            description:'If youre struggling to find thoughtful, well-researched fitness blogs on the Internet—we get it. While a decade ago youd have been hard-pressed to find any good sites, today,'
        },
        {
            id:2,
            service:"Body Fitness",
            price:'750',
            img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-2.jpg',
            description:'Having some inspiration is often the best way to motivate yourself towards your fitness goals. Most of the top influencers in the fitness industry have a rags'
        },
        {
            id:3,
            service:"Weight Loss",
            price:'999',
            img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-3.jpg',
            description:' Most of the top influencers in the fitness industry have a rags to riches story when it comes to fitness, and can provide examples of pushing personal boundaries and achieving what no one thought possible.'
        },
        {
            id:4,
            service:"Weight Endurance",
            price:'450',
            img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-4.jpg',
            description:'Doing fewer repetitions with more weight will help you increase your strength. On the other hand, doing more repetitions with lighter weights will help you build endurance. You absolutely need both in your everyday life.'
        },
        {
            id:5,
            service:"Nutrition/Diet Plans",
            price:'800',
            img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-5.jpg',
            description:'This easy-on-the-wallet blog also gets a thumbs up from kids. Parent duo Diana Johnson and Eric Johnson run Eating Richly, which features healthy, decadent recipes like Whole Wheat Oatmeal Fudge.'
        },
        {
            id:6,
            service:"Personal Training",
            price:'1500',
            img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/service-6.jpg',
            description:'It may be that you are getting results—just not in the way you expected. You might be gaining muscle and losing fat, changing your body composition while your weight stays constant, for instance.'
        }
    ]
    return (
        <div className='services-seciton py-5'>
            <Container>
                <h2 className='sec-title mb-5'>Services</h2>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        services.map(singleService=><SingleService key={singleService.id} singleService={singleService}></SingleService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;