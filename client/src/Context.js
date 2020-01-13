import React, { Component } from "react";
import { mapFetchedDataToState } from "./helpers/helpers";
import { 
  getUpdatedProductsWithTotalPriceWhenRemoved,
  getUpdatedProductsWithTotalPrice 
} from './helpers/products'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  
  state = {
    products: [],
    filters: new Set(),
    currentFilter: "",
    totalPrice: 0,
  };

  componentDidMount() {
      fetch('http://localhost:5000/api/hello')
      .then(response => response.json())
      .then(data => {
          const { products, filters } = mapFetchedDataToState(data);
          this.setState({products, filters});
        }
      )
      .catch(error => console.log(error));
      
  }

  changedFilter = (filter) => {
    this.setState({ currentFilter: filter})
  }

  changedItemQuantity = ({id, quantity}) => {
    const { products, totalPrice } = this.state;
    const { updatedProducts, newTotalPrice } = getUpdatedProductsWithTotalPrice({oldProducts :products, id, quantity, oldTotalPrice: totalPrice});
    this.setState({ products: updatedProducts, totalPrice: newTotalPrice })
  }

  removeItem = (id) => {
    const { products, totalPrice } = this.state;
    const { updatedProducts, updatedTotalCost } = getUpdatedProductsWithTotalPriceWhenRemoved({products, removedItemId: id, totalPrice});
    this.setState({products: updatedProducts, totalPrice: updatedTotalCost });
  }


  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          changedFilter: this.changedFilter,
          changedItemQuantity: this.changedItemQuantity,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };


