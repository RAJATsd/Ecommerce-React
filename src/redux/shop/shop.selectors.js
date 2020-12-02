import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const shopDataSelector = createSelector(
    [selectShop],
    (shop)=>shop.SHOP_DATA
);

export const selectCollectionForPreview = createSelector(
    [shopDataSelector],
    collections => Object.keys(collections).map(key=>collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [shopDataSelector],
        collections => collections[collectionUrlParam]
    )