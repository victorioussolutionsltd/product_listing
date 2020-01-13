import React from 'react';

import ProductList from './components/ProductList'
import './App.css';
import { ProductConsumer } from './Context';
import ProductFilter from './components/ProductFilter';
import { isColourMatched } from './helpers/helpers';

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <ProductConsumer>
        {
          value => (
              <div className="App">
                <ProductFilter filters={Array.from(value.filters)} onChange={value.changedFilter}/>
                <ProductList products={value.products.filter(item => isColourMatched(item.colour, value.currentFilter))}/>
                <div className="App-total">£ {value.totalPrice === '0.00' ? '0' : value.totalPrice}</div>
              </div>
            )
         }

        </ProductConsumer>

      </React.Fragment>      
    );
  }
}


export default App;
