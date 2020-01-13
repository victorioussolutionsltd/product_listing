import ProductDescription from '../containers/ProductDescription';

export const mapFetchedDataToState = (data) => {
  let products = [];
  let filters = new Set();
  data.forEach(element => {
    const product = new ProductDescription(element);
    products.push(product);
    filters.add(product.colour);
  });
  
  return {
      filters,
      products
    };
}

export const isColourMatched = (colour, filter) => { 
  return (colour === filter) || ((filter === "") || filter === "No filter"); 
}

