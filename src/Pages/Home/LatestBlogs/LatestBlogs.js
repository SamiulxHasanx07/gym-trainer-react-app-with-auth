import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleLatestBlog from './SingleLatestBlog/SingleLatestBlog';

const LatestBlogs = () => {
    const blogs = [
        { _id: 1, title: 'Best Diet Plan for Next 30 days', blog: 'Follow the 20 seconds on/10 seconds off method to boost aerobic fitness and muscle endurance.', img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/blog/blog-1.jpg'},
        { _id: 2, title: 'Superset Your Workouts', blog: 'Go all out, doing as many reps as you can in 20 seconds, then take a quick breather for recovery.', img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/blog/blog-2.jpg' },
        { _id: 3, title: 'Free Hand Exersise Tips & Tricks', blog: 'Repeat for 8 rounds. Make it a total-body workout with bodyweigh', img:'https://raw.githubusercontent.com/SamiulxHasanx07/images/main/gym-service/blog/blog-3.jpg'}
    ]
    return (
        <div className='py-5  bg-color'>
            <Container>
                <h2 className='sec-title text-white mb-4'>Latest Blogs</h2>

                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        blogs.map(singleBlog => <SingleLatestBlog key={singleBlog._id} singleBlog={singleBlog}></SingleLatestBlog>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default LatestBlogs;