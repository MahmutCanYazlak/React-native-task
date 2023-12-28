import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '../assets/css'
import { colors, dHeight, dWidth } from '../constants'
import { Image } from 'native-base'
import AppHeader from '../components/shared/AppHeader'
import Icon from '../components/shared/Icons'

const ProductDetailScreen = ({ route , navigation }) => {
  const [badge, setBadge] = useState(0)
  const { params } = route;
  const { product } = params;
  const imagePath = require("../assets/css/img/cloud.png")
  const imagePath4 = require("../assets/css/img/image4.png")
  const onPressBack = () => {
    navigation.goBack()
  }


  return (
    <GenericView flex={3} backgroundColor={colors.primaryLight}>
      <AppHeader title={product.name} headerBg="transparent" back onPressBack={onPressBack}  optionalBtn='heart' onPressOptionalBtn={() => alert('heart')} />
      <GenericView flex={0.7} backgroundColor={colors.primaryLight}>
        <GenericImage source={imagePath} resizeMode="cover" width={dWidth} height={dHeight * 0.20} />
      </GenericView>

      <GenericView position='absolute' zIndex={1} marginHorizontal={dWidth * 0.27} marginTop={dHeight * 0.07} >
        <GenericView position='absolute' zIndex={-1} marginHorizontal={dWidth * -0.020} marginTop={dHeight * -0.010}>
          <GenericImage source={imagePath4} width={dWidth * 0.49} height={dHeight * 0.22} />
        </GenericView>
        <GenericImage source={{ uri: product.image }} width={dWidth * 0.45} height={dHeight * 0.20} borderRadius={100} />
        <GenericView center marginTop={dHeight * 0.03}>
          <GenericText color={colors.white} fontSize={20} numberOfLines={1} >{product.name}</GenericText>
        </GenericView>
      </GenericView>

      <GenericView center flex={1}  >
        <GenericView backgroundColor={colors.primaryDark} borderRadius={400} width={800} height={800} center>
          <GenericView alignItems='center' justifyContent='space-around' marginHorizontal={dWidth * 0.52} marginVertical={dHeight * 0.05} >
            <GenericText color={colors.gray} >{product.description}</GenericText>
            <GenericText marginTop={dHeight * 0.09} color={colors.gray}>Price</GenericText>
            <GenericText fontSize={25} color={colors.secondary}  >{product.price} ₺</GenericText>
          </GenericView>
        </GenericView>
      </GenericView>

      <GenericView flex={0.2} alignItems='center' >
        <GenericView backgroundColor={colors.secondary} width={800} height={800} borderRadius={400} justifyContent='flex-start' alignItems='center'>
          <GenericView marginTop={dHeight * 0.02} flexDirection='row' justifyContent='space-around' width={dWidth * 0.8} center >
            <GenericTouchableOpacity onPress={() => setBadge(badge + 1)}>
              <Icon name="plus" type='Octicons' size={dWidth * .10} color={colors.white} />
            </GenericTouchableOpacity>
            <View style={{ position: 'relative' }}>
              <Icon name="opencart" type='Fontisto' size={dWidth * 0.07} color={colors.white} />
              <View style={styles.badgeContainer}>
                {/* Badge içeriği */}
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            </View>
            <GenericTouchableOpacity 
            onPress={() => badge > 0 ?  setBadge(badge - 1) : null}
            >
              <Icon name="dash" type='Octicons' size={dWidth * .10} color={colors.white} />
            </GenericTouchableOpacity>
          </GenericView>
        </GenericView>
      </GenericView>

    </GenericView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: -10, // Opencart ikonundan yukarıya olan mesafe
    right: -17, // Opencart ikonundan sağa olan mesafe
    backgroundColor: 'red', // Badge arka plan rengi
    borderRadius: 15, // Badge'in kenar yuvarlaklığı
    padding: 5, // Badge içeriğinin içerideki boşluk
  },
  badgeText: {
    color: 'white', // Badge içeriğinin rengi
    fontSize: 12, // Badge içeriğinin font boyutu
    fontWeight: 'bold', // Badge içeriğinin kalınlığı
    textAlign: 'center', // Badge içeriğinin hizalaması
  },
});

{
  /*   <GenericView position='absolute' zIndex={1} marginHorizontal={dWidth * 0.27} marginTop={dHeight * 0.07} >
          <GenericView position='absolute' zIndex={-1} marginHorizontal={dWidth * -0.012} marginTop={dHeight * -0.004}>
            <GenericImage source={imagePath3} width={dWidth * 0.48} height={dHeight * 0.21}  />
          </GenericView>
          <GenericImage source={{ uri: product.image }} width={dWidth * 0.45} height={dHeight * 0.20} borderRadius={100} />
          <GenericView center marginTop={dHeight * 0.05}>
            <GenericText color={colors.white} fontSize={20} numberOfLines={1} >{product.name}</GenericText>
          </GenericView>
        </GenericView> */
}