import React, { Component } from 'react';
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='bg-dark py-3 opacity-75'>
                <p className='text-white text-center mb-0'>Copyright @ Your Website 2019</p>
            </div>
        );
    }
}

export default Footer;