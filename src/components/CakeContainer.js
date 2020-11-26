import React from 'react';
import { connect } from 'react-redux';
import {buyCake} from '../redux'
const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>
    )
}

//with this function an additional 
//attribute with the name 'numOfCakes'
//will be added to props object
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//with this function an additional 
//attribute with the name 'buyCake'
//will be added to props object and with 
//that state value can be changed
const mapDispathchToProps =  (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
} 
export default connect
(mapStateToProps,
 mapDispathchToProps)
(CakeContainer)