import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { colors, dHeight, dWidth } from '../constants';
import CartScreen from '../screens/CartScreen';
import Icon from '../components/shared/Icons';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { Badge } from 'native-base';
import { GenericView } from '../assets/css';
import { useNavigationContainerRef } from '@react-navigation/native';

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    // const cartCount = useSelector((state) => state.cartReducer.cartCount || 0);

    const barColors = {
        home: colors.primary,
        cart: colors.black
    };

    const [tab, setTab] = useState('home');
    const navRef = useNavigationContainerRef();

    useEffect(() => {
        const unsubscribe = navRef.addListener('state', () => {
            const currRoute = navRef.getCurrentRoute();
            if (currRoute) {
                // A work-around to set background color for the bar after the ripple
                // effect completes. The 200 ms delay comes from trial and error
                setTimeout(() => setTab(currRoute.name), 200);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <BottomTab.Navigator
            initialRouteName="HomeScreen"
            shifting={true}
            activeColor={colors.red}
            barStyle={{
                backgroundColor: barColors[tab],
            }}
        >
            <BottomTab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarColor: barColors.home,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={35} color={focused ? colors.blue : colors.white} />
                    )
                }}
            />
            <BottomTab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarBadge: 3,
                    tabBarColor: barColors.cart,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <><GenericView backgroundColor={focused ? colors.white : colors.black} width={dWidth / 6} height={dHeight / 10} borderRadius={dHeight / 30} justifyContent="center" alignItems="center" paddingBottom={30} >
                            <Icon name="cart" size={35} color={focused ? colors.black : colors.white} />
                        </GenericView>


                        </>
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -14,
        right: 3,
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: colors.primary,
        justifyContent: 'center',
    },
    badgeText: {
        color: colors.red,
        textAlign: 'center'
    },
});
