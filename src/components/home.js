import React from 'react';
import Header from './header';
import Workshop from './workshop';
import Blog from './blog';
import Footer from './footer';

const Home = () => {
    return(
        <div>
            <Header />
            <Workshop />
            <Blog />
            <Footer />
        </div>
    );
}

export default Home;