import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';


import './collections-overview.styles.scss';

const CollectionOverview = ({SHOP_DATA}) => (
    <div className='collections-overview'>
        {
            SHOP_DATA.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    SHOP_DATA:selectCollectionForPreview
});


export default connect(mapStateToProps)(CollectionOverview);