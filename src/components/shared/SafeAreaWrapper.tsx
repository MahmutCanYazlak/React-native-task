import { GenericView } from '../../assets/css';
import { colors, dHeight } from '../../constants';
import { RootState } from "../../store";
import React, { ReactNode, useEffect } from "react"
import { StatusBar, BackHandler } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector } from "react-redux"
import Loader from "./Loader"

type SafeAreaWrapperProps = {
    children: ReactNode
}

const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {

    const isLoading = useSelector((state: RootState) => state.loadingReducer.isLoading);

    useEffect(() => {



        /* // Geri düğmesi olayını dinlemek için bir olay dinleyici ekleyin
        BackHandler.addEventListener('hardwareBackPress', handleBackButton)

        // Component sonlandığında olay dinleyicisini kaldırın
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
        } */

    }, [])

    const handleBackButton = () => {
        // Geri düğmesinin işlevsiz olmasını sağlamak için true döndürün
        return true
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primary}
            />
            <SafeAreaView
                style={{
                    flex: 10,
                    
                
                }}
            >
                <GenericView flex={1} backgroundColor={colors.primary}>
                     {
                        isLoading ?
                            <Loader />
                            :
                            children
                    } 
                </GenericView>
               
            </SafeAreaView>
        </>

    )
}

export default SafeAreaWrapper