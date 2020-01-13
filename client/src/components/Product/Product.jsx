import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductDescription from '../../containers/ProductDescription'
import ProductOperation from '../ProductOperation'
import { ListItem } from '@material-ui/core';
import { ProductConsumer } from '../../Context';

class Product extends Component {


    render() {
        const { itemInformation } = this.props;
        const {
          id,
          quantity,
          name,
          price,
          img
        }  = itemInformation;

        return (
            <div className="Product">
              <ListItem button>
                <img src={img} height="150" alt="Product"/>
                <div className="ProductDescription">
                  <div className="ProductName">{name}</div>
                  <div className="ProductPrice">£{price}</div>
                </div>
                <ProductConsumer>
                  { value => (
                    <ProductOperation 
                      quantity={quantity}
                      onChangedQuantity={ (quantity) => {value.changedItemQuantity({id, quantity})}}
                      onRemove={() => { value.removeItem(id)}}
                      /> 
                  )}
                </ProductConsumer>
              </ListItem>  
            </div>
        )
    }
}

Product.propTypes = {
    itemInformation : PropTypes.instanceOf(ProductDescription),
}

export default Product;