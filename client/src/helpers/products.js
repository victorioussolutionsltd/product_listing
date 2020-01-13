import ProductDescription  from '../containers/ProductDescription'


const getProductFromArray = (products, productId) => {
    const product = products.find( item  => item.id === productId );
    return product;
}

const getTotalCostOfProduct = (product) => {
    const { price, quantity } = product;
    return price * quantity;
  }

const cloneArrayOfProducts = (products) => {
    const clonedObjects = JSON.parse(JSON.stringify(products));

    return clonedObjects.reduce( (arrOfProductDescriptionType, element) => { 
        arrOfProductDescriptionType.push(new ProductDescription({...element}, element.quantity));
        return arrOfProductDescriptionType;
    }, []);
}

  export const getUpdatedProductsWithTotalPrice = ({oldProducts, id, quantity, oldTotalPrice}) => {
    const updatedProducts = cloneArrayOfProducts(oldProducts);
    const product = getProductFromArray(updatedProducts, id);
    const oldCost = getTotalCostOfProduct(product);
    product.quantity = quantity;
    const newCost = product.price * product.quantity;
    const newTotalPrice = oldTotalPrice - oldCost + newCost;
    return { updatedProducts, newTotalPrice : newTotalPrice.toFixed(2) };
  }

  export const getUpdatedProductsWithTotalPriceWhenRemoved = ({products, removedItemId, totalPrice}) => {
    const updatedProducts = cloneArrayOfProducts(products);
    const foundProduct = getProductFromArray(updatedProducts, removedItemId);
    const updatedTotalCost = totalPrice - (foundProduct.price * foundProduct.quantity);
    updatedProducts.splice(updatedProducts.indexOf(foundProduct), 1);
    return { updatedProducts, updatedTotalCost : updatedTotalCost.toFixed(2)};
  }