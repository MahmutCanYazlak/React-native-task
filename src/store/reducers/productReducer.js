import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from "../../service/productsService";
import { setLoading } from './loadingReducer';
import { StorageService } from '../../utils/storage';

//thunk saga
//payload: parametreler yük taşır value gibi

const getProductsThunk = createAsyncThunk("product/getAll", async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    let response = await ProductService.getProducts();
    if (response?.status === 200) {
        let favoriteData = await StorageService.getItem('favoriteData');
        let array = [];
        if (favoriteData) {
            let favoriteDataJson = JSON.parse(favoriteData);
            array = response.data.map((item) => {
                let index = favoriteDataJson.findIndex((favoriteItem) => favoriteItem.id === item.id);
                if (index !== -1) {
                    return { ...item, quantity: 1, isFavorite: true }
                }
                else {
                    return { ...item, quantity: 1, isFavorite: false }
                }
            })
        }
        else {
            array = response.data.map((item) => {
                return { ...item, quantity: 1, isFavorite: false }
            })
        }
        dispatch(setLoading(false))
        

        return array;
    }
    else {
        dispatch(setLoading(false))
        return Promise.reject(response);
        //promise reject demek hata olduğu anlamına geliyor

    }
})

const productSlice = createSlice({
    name: "employee",
    initialState: {
        genericProductList: [],                    // tüm ürün listesi
        filteredGenericProductList: [],            // filtrelenmiş ürün listesi
        displayedProducts: [],                     // gösterilen ürün listesi
        currentPage: 0,                                       // gösterilen sayfa numarası
        productsPerPage: 12,                                  // sayfa başına gösterilen ürün sayısı


        // filtereleme seçenekleri
        sortChecked: "oldToNew",                  // sıralama seçeneği
        productBrandList: [],            // ürün markaları (sadece farklı olanlar)
        filteredProductBrandList: [],    // filtrelenmiş ürün markaları (arama için)
        productModelList: [],            // ürün modelleri (sadece farklı olanlar)
        filteredProductModelList: [],    // filtrelenmiş ürün modelleri (arama için)

        status: "idle",
    },

    reducers: {

        loadMoreProducts: (state) => {
            state.displayedProducts = state.filteredGenericProductList.slice(0, state.currentPage * state.productsPerPage + state.productsPerPage);
            state.currentPage++;
        },

        filterProducts: (state) => {
            let brandList = state.productBrandList.filter((item) => item.checked);
            let modelList = state.productModelList.filter((item) => item.checked);
            let sortChecked = state.sortChecked;
            let filteredList = state.genericProductList;

            if (brandList.length > 0) {
                filteredList = filteredList.filter((prodact) => brandList.some((brand) => brand.name === prodact.brand));
            }
            if (modelList.length > 0) {
                filteredList = filteredList.filter((product) => modelList.some((item) => item.model === product.model));
            }
            if (sortChecked === "oldToNew") {
                filteredList = filteredList.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            }
            else if (sortChecked === "newToOld") {
                filteredList = filteredList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            }
            else if (sortChecked === "priceLowToHigh") {
                filteredList = filteredList.sort((a, b) => a.price - b.price);
            }
            else if (sortChecked === "priceHighToLow") {
                filteredList = filteredList.sort((a, b) => b.price - a.price);
            }
            state.filteredGenericProductList = filteredList;
            state.displayedProducts = filteredList.slice(0, 12);
            state.currentPage = 1;
        },
        changeFavorite: (state, action) => {
            let id = action.payload;
            let product = state.genericProductList.find((product) => product.id === id);
            if (product) {
                product.isFavorite = !product.isFavorite;
                state.genericProductList = [...state.genericProductList];
            }
            let filteredProduct = state.filteredGenericProductList.find((product) => product.id === id);
            if (filteredProduct) {
                filteredProduct.isFavorite = !filteredProduct.isFavorite;
                state.filteredGenericProductList = [...state.filteredGenericProductList];
            }
            let displayedProduct = state.displayedProducts.find((product) => product.id === id);
            if (displayedProduct) {
                displayedProduct.isFavorite = !displayedProduct.isFavorite;
                state.displayedProducts = [...state.displayedProducts];
            }
        }
    },


    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.genericProductList = action.payload;
            state.filteredGenericProductList = action.payload;
            state.displayedProducts = action.payload.slice(0, 12); // ilk 12 ürünü göster
            state.currentPage = 1;

            //ürün marka listesi oluşturuluor
            let brandList = [];
            action.payload.forEach((product) => {
                let brand = product.brand;
                if (!brandList.some((item) => item.name === brand)) {
                    brandList.push({ brand, checked: false });
                }
            });

            //ürün model listesi oluşturuluor
            let modelList = [];
            action.payload.forEach((product) => {
                let model = product.model;
                if (!modelList.some((item) => item.model === model)) {
                    modelList.push({ model, checked: false });
                }
            });

            state.productBrandList = brandList;
            state.filteredProductBrandList = brandList;

            state.productModelList = modelList;
            state.filteredProductModelList = modelList;
        });
    }
});

export const { loadMoreProducts, filterProducts, changeFavorite } = productSlice.actions;
export { getProductsThunk };
export default productSlice.reducer;