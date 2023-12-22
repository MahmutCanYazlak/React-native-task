import React, { useEffect } from 'react';
import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '../assets/css';
import { colors, dHeight, dWidth } from '../constants';
import Icon from './shared/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addAndRemoveFavoriteThunk, addToCartThunk } from '../store/reducers';
import { ColorPalette } from '../constants/theme';

const TasarımTest = ({ product, navigation , item }) => {
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
    useEffect(() => {
        console.log(item)
    }
    ,[])

   

    return (
        <GenericView backgroundColor={colors.primaryLight} margin={dWidth * 0.0125} padding={dWidth * 0.025} borderRadius={5} >
            <GenericView padding={dWidth * 0.0125}>
                <GenericTouchableOpacity onPress={() => goToProductDetail(product)}>
                    <GenericView  >
                        <GenericImage source={{ uri: product.image }} resizeMode="cover" width={dWidth * 0.3875} height={dWidth * .3875} />
                    </GenericView>
                    <GenericView  marginTop={dWidth * 0.025} flexDirection="row" spaceBetween>
                        <GenericView justifyContent="center">
                            <GenericText color={colors.primary} fontSize={16} bold>
                                {product.price} ₺
                            </GenericText>
                        </GenericView>
                        <GenericTouchableOpacity onPress={() => addAndRemoveFavorite(product.id)} justifyContent="center">
                            <Icon name={product.isFavorite ? 'heart' : 'heart-outline'} size={25} color={colors.primary} />
                        </GenericTouchableOpacity>
                    </GenericView>
                    <GenericView marginTop={dWidth * 0.025} marginBottom={dWidth * 0.025}>
                        <GenericText color={colors.black} fontSize={16} bold numberOfLines={1}>
                            {product.name.length > 15 ? product.name.substring(0, 15) + '...' : product.name}
                        </GenericText>
                    </GenericView>
                </GenericTouchableOpacity>
                <GenericView>
                    <GenericTouchableOpacity
                        onPress={() => addToCart(product.id)}
                        backgroundColor={colors.primary}
                        padding={dWidth * 0.025}
                        center
                        borderRadius={5}
                    >
                        <GenericText color={colors.white} fontSize={16} bold>
                            Add to Cart
                        </GenericText>
                    </GenericTouchableOpacity>
                </GenericView>
            </GenericView>
        </GenericView>
    );
};

export default TasarımTest;
