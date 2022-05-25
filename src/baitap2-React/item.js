import React, { Component } from 'react';
import './css/item.css';

class Item extends Component {
    render() {
        return (
            <div className='bg-items'>
                <div>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='fs-4 mt-3'></div>
                        <div className='w-100 opacity-75 bg-warning'>
                        <h1 className='title'>GUCCI G8850U</h1>
                        <span className='detail'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</span>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;