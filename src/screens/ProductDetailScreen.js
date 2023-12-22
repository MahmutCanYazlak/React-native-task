import { View, Text } from 'react-native'
import React from 'react'
import { GenericImage, GenericView } from '../assets/css'
import { colors, dHeight, dWidth } from '../constants'
import { Image } from 'native-base'

const ProductDetailScreen = () => {
  const imagePath = require("../assets/css/img/cloud.png")
  const imagePath2 = require("../assets/css/img/deer.png")
  return (
    <GenericView flex={3} backgroundColor={colors.primaryLight}>
      <GenericView flex={0.7} backgroundColor={colors.primaryLight}>
        <GenericImage source={imagePath} resizeMode="cover" width={dWidth} height={dHeight * 0.20} />
      </GenericView>
      <GenericView position='absolute' zIndex={1}  >
        <GenericImage source={imagePath2}  width={dWidth} height={dHeight * 0.35} />
      </GenericView>
      <GenericView center flex={2}>
        <GenericView backgroundColor={colors.primary} borderRadius={500} width={800} height={800}>

        </GenericView>
        <GenericView center backgroundColor={colors.secondary}>
        </GenericView>
      </GenericView>

    </GenericView>
  )
}

export default ProductDetailScreen