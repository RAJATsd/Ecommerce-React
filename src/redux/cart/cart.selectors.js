import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>
        cartItems.reduce(
            (sumQuantity,item)=> sumQuantity+item.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => 
        cartItems.reduce(
            (allSum,item)=>allSum+(item.price*item.quantity)
            ,0
        )
)