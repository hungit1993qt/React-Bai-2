import React, { Component } from 'react';
import './css/item.css';
import g3 from "../glassesImage/v3.png";
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class Item extends Component {
    data = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        id: null,
        price: null,
        name: null,
        url: null,
        desc: null,
    }
    showGlasses = () => {
        return this.data.map((item, index) => {
            return (

                <img onClick={() => this.showInfo(index)} src={item.url} alt="" />

            );
        });
    }
    showInfo = (id) => {
        return this.data.map((item, index) => {

            if (index === id) {
                this.setState({
                    id: index,
                    price: item.price,
                    name: item.name,
                    url: item.url,
                    desc: item.desc,
                });
            }
        });
    }
    render() {
        return (
            <div>
                <div className='mx-auto d-flex flex-row justify-content-around w-75 mt-3'>
                    <div className='bg-items position-relative'>
                        <img src={this.state.url} alt="" />
                        <div className='w-100 opacity-75 h-auto bg-warning position-absolute bottom-0'>
                            <h1 className='name mb-0'>{this.state.name}</h1>
                            <p className='price'>{this.state.price}</p>
                            <span className='desc'>{this.state.desc}</span>
                        </div>
                    </div>
                    <div className='bg-items position-relative'>
                    </div>
                </div>
                <div className='select mx-auto d-flex flex-row'>
                    {this.showGlasses()}

                </div>
            </div>
        );
    }
}

export default Item;