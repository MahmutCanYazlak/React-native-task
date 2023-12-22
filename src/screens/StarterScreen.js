import { View, Text } from 'react-native'
import { StorageService } from '../utils/storage';
import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'
import { useDispatch } from 'react-redux'

import { getProductsThunk, setFavoriteData } from '../store/reducers'
import { Button } from 'native-base';
import Loader from '../components/shared/Loader';
const StarterScreen = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    getProdacts()
    checkLocalStorage()
  }, [])
  const getProdacts = () => {
    dispatch(getProductsThunk())
  }
  const checkLocalStorage = async () => {
    /*  let cartData = await StorageService.getItem('cartData')
     if (cartData) {
       let data = JSON.parse(cartData)
       dispatch(setCartData(data))
     } */
    let favoriteData = await StorageService.getItem('favoriteData')
    if (favoriteData) {
      let data = JSON.parse(favoriteData)
      dispatch(setFavoriteData(data))
    }

    props.navigation.navigate('HomeTabs')

  }
  return (

    <Loader/>

  )
}

export default StarterScreen