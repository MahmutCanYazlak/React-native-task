import { StorageService } from '../../utils/storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IGenericProduct } from '@/types/dataTypes';
import { changeFavorite } from './productReducer';

const addAndRemoveFavoriteThunk = createAsyncThunk("addAndRemoveFavoriteThunk", async (payload, { dispatch }) => {

    let product = payload.productList.find((item) => item.id === payload.id);
    if (product) {
        product.isFavorite = !product.isFavorite;
        let favoriteData = await StorageService.getItem('favoriteData');
        let data = [];
        if (favoriteData) {
            data = JSON.parse(favoriteData);
            let index = data.findIndex((item) => item.id === payload.id);
            if (index !== -1) {
                data.splice(index, 1);
            }
            else {
                data.push({ ...product });
            }
            await StorageService.setItem('favoriteData', JSON.stringify(data));

        }
        else {
            data = [{ ...product }];
            await StorageService.setItem('favoriteData', JSON.stringify(data));
        }
        return data;
    }
    else {
        Alert.alert("Hata", "Ürün bulunamadı");
        return [];
    }
}
)

const favoriteSlice = createSlice({
    name: "cart",
    initialState: {
        favoriteList: [], //favori ürün listesi
        status: "idle",
    },
    reducers: {
        setFavoriteData: (state, action) => {
            state.favoriteList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addAndRemoveFavoriteThunk.fulfilled, (state, action) => {
            state.favoriteList = action.payload;
        });
    }
})

export { addAndRemoveFavoriteThunk };
export const { setFavoriteData } = favoriteSlice.actions ; 
export default favoriteSlice.reducer ;