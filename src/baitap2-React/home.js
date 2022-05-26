import React, { Component } from 'react';
import './css/home.css';
import Header from './header';
import Item from './item';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Header />
                <div className=''>
                    <Item />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;