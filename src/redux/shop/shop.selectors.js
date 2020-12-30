import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const shopDataSelector = createSelector(
    [selectShop],
    (shop)=>shop.SHOP_DATA
);

export const selectCollectionForPreview = createSelector(
    [shopDataSelector],
    collections => collections ? Object.keys(collections).map(key=>collections[key]):[]
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [shopDataSelector],
        collections => collections ? collections[collectionUrlParam] : null
    )

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)