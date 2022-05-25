import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='mx-auto d-flex align-items-center justify-content-center w-75 py-4'>
                    <div>
                        <span className='text-white'>TRY GLASSES APP ONLINE</span>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Header;