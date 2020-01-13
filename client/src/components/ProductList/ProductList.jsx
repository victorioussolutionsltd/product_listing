import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';

import Product from '../Product';
import ProductDescription  from './../../containers/ProductDescription';

class ProductList extends Component {

    render() {
        const { products } = this.props;
        return (
            <>
                <List dense={false}>
                    {
                        products.map( 
                            item => (
                                <Product 
                                    key={item.id} 
                                    itemInformation={item} 
                                />
                        ))
                    }
                </List>
            </>
        )
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.instanceOf(ProductDescription)),
}

export default ProductList;