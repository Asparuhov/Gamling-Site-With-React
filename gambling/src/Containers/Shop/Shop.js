import classes from './Shop.module.css';
import React, {useState, useEffect} from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import PaypalLogo from '../../assets/paypal.png';
const Shop = props => {
    return (
        <ul style={{flexWrap: 'wrap', justifyContent: 'center'}}>
            {props.options.paypal.map(set => {
                return (
                    <Item url={PaypalLogo}
                        value={set[0]}
                        type='PayPal'
                        points={set[1]}
                        clicked={props.balance >= set[1] ? () => props.addInventory({value: set[0], type: 'PayPal'}, set[1]):() => alert('Not enough balance')}
                        key={set[0] + 'PayPal'}
                    />
                )
            })}
        </ul>
    )
}

const mapStateToProps = state =>{
    return {
        balance: state.balance,
        inventory: state.inventory,
        options: state.options
    }
}
const toActions = dispatch =>{
    return {
        addInventory: (info, cost) => dispatch({type: 'ADDINVENTORY', info: info, cost:cost})
    }
}

export default connect(mapStateToProps, toActions)(Shop);
