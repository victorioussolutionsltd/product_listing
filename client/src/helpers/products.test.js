import { 
    getUpdatedProductsWithTotalPriceWhenRemoved,
    getUpdatedProductsWithTotalPrice
} from './products';

import ProductDescription from '../containers/ProductDescription'

const arrProducts = [
    new ProductDescription({id: 1, colour: 'Black', price: 20, img: ""}, 0),
    new ProductDescription({id: 2, colour: 'Black', price: 10, img: ""}, 0),
    new ProductDescription({id: 3, colour: 'Black', price: 10, img: ""}, 0),
]

const arrProductsWithSomeQuantity = [
    new ProductDescription({id: 1, colour: 'Black', price: 20, img: ""}, 2),
    new ProductDescription({id: 2, colour: 'Black', price: 10, img: ""}, 2),
    new ProductDescription({id: 3, colour: 'Black', price: 10, img: ""}, 2),
]

test('Get 40 as TotalPrice', () => {
    const { newTotalPrice } = getUpdatedProductsWithTotalPrice({oldProducts: arrProducts, id: 1, quantity: 2, oldTotalPrice: 0});
    expect(newTotalPrice).toBe('40.00')
});

test('Get updated list of products with quantity of two for product with id 1', () => {
    const { updatedProducts } = getUpdatedProductsWithTotalPrice({oldProducts: arrProducts, id: 1, quantity: 2, oldTotalPrice: 0});

    const expectedProducts = [
        new ProductDescription({id: 1, colour: 'Black', price: 20, img: ""}, 2),
        new ProductDescription({id: 2, colour: 'Black', price: 10, img: ""}, 0),
        new ProductDescription({id: 3, colour: 'Black', price: 10, img: ""}, 0),
    ]

    expect(JSON.stringify(updatedProducts)).toBe(JSON.stringify(expectedProducts))
});


test('Get updated list of products after removal of item with id 2', () => {
    const { updatedProducts } = getUpdatedProductsWithTotalPriceWhenRemoved({products : arrProducts, removedItemId: 2, totalPrice: 0});
    
    const expectedProducts = [
        new ProductDescription({id: 1, colour: 'Black', price: 20, img: ""}, 0),
        new ProductDescription({id: 3, colour: 'Black', price: 10, img: ""}, 0),
    ]

    expect(JSON.stringify(updatedProducts)).toBe(JSON.stringify(expectedProducts));
})

test('Get updated total cost of products after removal of item with id 2', () => {
    
    const { updatedTotalCost } = getUpdatedProductsWithTotalPriceWhenRemoved({products : arrProductsWithSomeQuantity, removedItemId: 2, totalPrice: 80});
    expect(updatedTotalCost).toBe("60.00");
})