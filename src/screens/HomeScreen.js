import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk, loadMoreProducts } from '../store/reducers'
import SafeAreaWrapper from '../components/shared/SafeAreaWrapper';
import AppHeader from '../components/shared/AppHeader';
import { GenericText, GenericTouchableOpacity, GenericView } from '../assets/css';
import Icon from '../components/shared/Icons';
import { FlatList, Modal, ScrollView } from 'native-base';
import { colors, dHeight, dWidth } from '../constants';
import ProductItem from '../components/ProductItem';
import { Searchbar } from 'react-native-paper';
import TasarımTest from '../components/tasarımTest';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const displayedProducts = useSelector(state => state.productReducer.displayedProducts || [])
  const genericProductList = useSelector((state) => state.productReducer.genericProductList || []);
  const [state, setState] = useState({ showModal: false })
  const { showModal } = state

  useEffect(() => {

  }, [])

  const renderItem = ({ item }) => {
    return <GenericView>
      <ProductItem product={item} navigation={navigation} />
      {
        item.id == genericProductList.length ? <GenericView  height={dHeight*.09}></GenericView> : null
      }
    </GenericView>
    
  };

  const loadMore = () => {
    dispatch(loadMoreProducts());
  };

  // ürün arama
  /*   const searchProductList = useCallback((query) => {
      dispatch(searchProducts(query));
    }, []); */


  const goFavorite = () => {
    navigation.navigate('FavoriteScreen');
  }

  const changeShowModal = () => {   // modalı açıp kapatan fonksiyon
    setState({ ...state, showModal: !showModal });
  }


  return (
    <SafeAreaWrapper>
      <AppHeader title="Home" />
      <GenericView padding={dWidth * .0125} flex={1} marginBottom={dWidth * .15}>
        <GenericView marginBottom={dWidth * .01} flexDirection='row' marginLeft={dWidth * .0125}>
          <GenericView flex={6}>
            <Searchbar style={{ backgroundColor: colors.primaryDark, borderRadius: 15 }} placeholder="Search" placeholderTextColor={colors.grayLight} />
          </GenericView>
          <GenericView flex={1} center>
            <GenericTouchableOpacity
              onPress={() => changeShowModal()}
            >
              <Icon name='filter' size={35} color={colors.secondary} />
            </GenericTouchableOpacity>
          </GenericView>
        </GenericView>

        <GenericView flex={1} marginBottom={dWidth * -.16} >
          <FlatList
            flex={1}
            numColumns={2}
            data={displayedProducts}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id.toString()}
            onEndReached={loadMore}// sayfa sonuna gelindiğinde çalışacak fonksiyon
          />
          <GenericView backgroundColor='red' />



        </GenericView>


        {/* Filter Modal */}
        {/*  <Modal
          visible={showModal}
          transparent={true}
        >
       
        </Modal> */}

      </GenericView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen


{
  /* return (
   <SafeAreaWrapper>
     <AppHeader title="Home" />
     <GenericView padding={dWidth * .0125} flex={1} marginBottom={dWidth * .15}>
       <GenericView marginBottom={dWidth * .01} flexDirection='row' marginLeft={dWidth * .0125}>
         <GenericView flex={6}>
           <Searchbar style={{ backgroundColor: colors.primaryDark, borderRadius: 15 }} placeholder="Search" placeholderTextColor={colors.grayLight} />
         </GenericView>
         <GenericView flex={1} center>
           <GenericTouchableOpacity
             onPress={() => changeShowModal()}
           >
             <Icon name='filter' size={35} color={colors.secondary} />
           </GenericTouchableOpacity>
         </GenericView>
       </GenericView>
       <GenericView flexDirection='column' marginBottom={dWidth * -.16} flex={1}>
         <ScrollView>
           <GenericView marginBottom={dWidth * .20} >
             <FlatList
               numColumns={2}
               data={displayedProducts}
               renderItem={renderItem}
               keyExtractor={(item, index) => item.id.toString()}
               onEndReached={loadMore}// sayfa sonuna gelindiğinde çalışacak fonksiyon
             />
             <GenericView backgroundColor='transparent' />
           </GenericView>
         </ScrollView>
       </GenericView>


     

     </GenericView>
   </SafeAreaWrapper>
 ); */
}