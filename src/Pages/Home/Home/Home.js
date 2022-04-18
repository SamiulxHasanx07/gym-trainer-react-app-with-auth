import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import LatestBlogs from '../LatestBlogs/LatestBlogs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LatestBlogs></LatestBlogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;