import { getProductsThunk, loadMoreProducts, filterProducts, changeFavorite } from "./productReducer";
import { addAndRemoveFavoriteThunk, setFavoriteData } from "./favoriteReducer";
import { setLoading } from "./loadingReducer";

export {
    getProductsThunk,
    loadMoreProducts,
    setLoading,
    filterProducts,
    changeFavorite,
    addAndRemoveFavoriteThunk,
    setFavoriteData,

};