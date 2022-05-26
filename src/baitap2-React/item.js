import React, { Component } from 'react';
import './css/item.css';
import g3 from "../glassesImage/v3.png";

class Item extends Component {
    render() {
        return (
            <div>
                <div className='mx-auto d-flex flex-row justify-content-around w-75 mt-3'>
                    <div className='bg-items position-relative'>
                        <img src={g3} alt="" />
                        <div className='w-100 opacity-75 h-auto bg-warning position-absolute bottom-0 p-1'>
                            <h1 className='name'>GUCCI G8850U</h1>
                            <p className='price'>30$</p>
                            <span className='desc'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</span>
                        </div>
                    </div>
                    <div className='bg-items position-relative'>
                    </div>
                </div>
                <div className='select mx-auto d-flex flex-row'>
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />
                    <img src={g3} />

                </div>
            </div>
        );
    }
}

export default Item;