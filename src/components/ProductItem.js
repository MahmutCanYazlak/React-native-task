import React, { useEffect } from 'react';
import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '../assets/css';
import { colors, dHeight, dWidth } from '../constants';
import Icon from './shared/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addAndRemoveFavoriteThunk, addToCartThunk } from '../store/reducers';
import { ColorPalette } from '../constants/theme';

const ProductItem = ({ product, navigation }) => {
    const dispatch = useDispatch();
    const genericProductList = useSelector((state) => state.productReducer.genericProductList || []);

    const goToProductDetail = (product) => {
        navigation.navigate('ProductDetailScreen', { product });
    };

    const addToCart = (id) => {
        dispatch(addToCartThunk({ id, quantity: 1, productList: genericProductList }));
    };

    const addAndRemoveFavorite = (id) => {
        dispatch(addAndRemoveFavoriteThunk({ id, productList: genericProductList }));
    };
  


    return (
        <GenericView backgroundColor={colors.primaryLight} margin={dWidth * 0.0125} padding={dWidth * 0.025} borderRadius={30} >
            <GenericView padding={dWidth * 0.0125}>
                <GenericTouchableOpacity onPress={() => goToProductDetail(product)}>
                    <GenericView  >
                        <GenericImage source={{ uri: product.image }} resizeMode="cover" width={dWidth * 0.3875} height={dWidth * .3875} borderRadius={100} />
                    </GenericView>
                    <GenericView marginTop={dWidth * 0.025} marginBottom={dWidth * 0.025} center>
                        <GenericText color={colors.white} fontSize={16} bold numberOfLines={1}>
                            {product.name.length > 15 ? product.name.substring(0, 15) + '...' : product.name}
                        </GenericText>
                    </GenericView>
                    <GenericView marginTop={dWidth * 0.020} marginHorizontal={dWidth * 0.015} flexDirection="row" spaceBetween>
                        <GenericTouchableOpacity
                            onPress={() => addToCart(product.id)}
                            
                            justifyContent="center"
                        >
                            <Icon name="opencart" size={20} color={colors.grayLight} type='Fontisto' />
                        </GenericTouchableOpacity>

                        <GenericTouchableOpacity onPress={() => addAndRemoveFavorite(product.id)} justifyContent="center">
                            <Icon name={product.isFavorite ? 'heart' : 'heart-outline'} size={25} color={colors.grayLight} />
                        </GenericTouchableOpacity>
                    </GenericView>

                </GenericTouchableOpacity>
                <GenericView center marginTop={dWidth * 0.020}>
                    <GenericText color={colors.secondary} fontSize={16} bold>
                        {product.price} ₺
                    </GenericText>
                </GenericView>
            </GenericView>
        </GenericView>
    );
};

export default ProductItem;
