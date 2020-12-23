import classes from './Shop.module.css';
import React, {useState} from 'react';
import Item from './Item';
import PaypalLogo from '../../assets/paypal.png';
const Shop = props => {
    const [options, setOptions] = useState({
        paypal: [
            [20, 2000],
            [40, 4000],
            [60, 6000],
            [80, 8000],
            [100, 10000]
        ]

    })
    return (
        <div className={classes.Shop}>
            {options.paypal.map(set => {
                return (
                    <Item url={PaypalLogo}
                        value={set[0]}
                        type='PayPal'
                        points={set[1]}
                    />
                )
            })}
        </div>
    )
}

export default Shop;
