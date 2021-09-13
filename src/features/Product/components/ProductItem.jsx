import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
ProductItem.propTypes = {
    product:PropTypes.object,
};

function ProductItem(props) {
    const {product} = props
    const thumbnail = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
    return (
        <Box padding={1}>
            <Box paddingBottom={1} minHeight="215px">
                <img src={thumbnail} width="100%" alt={product.name} />
            </Box>
            <Typography variant="body2" mt={1}>{product.name}</Typography>
            <Typography variant="body2" >
                <Box component="span"  fontSize='16px' fontWeight="bold" mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default ProductItem;