const fetch = require('node-fetch')
import { data } from './mockData';

const getDataFromAPIMock = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  } )
}

const getDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://my-json-server.typicode.com/benirvingplt/products/products `)
    .then((results) => resolve(results.json())).catch((Error) => {
      console.log(Error);
      reject(Error);
    });
  });
}

export const fetchProducts = (req, res) => {
    getDataFromAPI(req)
    .then((response) => {
      res.send(JSON.stringify(response));
    })
  }