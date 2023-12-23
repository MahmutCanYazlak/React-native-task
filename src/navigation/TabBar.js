import React, { useState } from 'react';
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
import Icon from '../components/shared/Icons';
import { Text } from 'native-base';
import { ColorPalette, colors, dHeight, dWidth } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const TabBar = ({ state, descriptors, navigation }) => {
   

  

    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route, index) => {
                if (route.name === 'PlaceholderScreen') {
                    return (
                        <View key={index} style={styles.mainItemContainer}>
                            <Text style={{ color: '#f70a0a' }}>Deneme</Text>
                        </View>
                    );
                }

                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const iconList = [
                    { name: 'home', type: 'SimpleLineIcons', color: isFocused ? colors.secondary : '#A0A0A0', size: 25 },
                    { name: 'heart', type: 'Octicons', color: isFocused ? colors.secondary : '#A0A0A0', size: 25 },
                    { name: 'opencart', type: 'Fontisto', color: isFocused ? colors.secondary: '#A0A0A0', size: 20 },
                    { name: 'settings', type: 'Feather', color: isFocused ? colors.secondary : '#A0A0A0', size: 25 },
                ];

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }

                  
                };

                return (
                    <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label === 'notes' ? 4 : 0 }]}>
                        <Pressable
                            onPress={onPress}
                            style={{
                                backgroundColor: isFocused ? colors.primaryDark : colors.primaryLight,
                                borderRadius: 25,
                                borderColor: '#ffffff',
                                position: 'relative',
                                height: dHeight * 0.067,
                                width: dWidth * 0.15,
                            }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 17, flexDirection: 'row' }}>
                                <Icon {...iconList[index]} />
                                {index === 2 && (
                                    <View style={{ position: 'absolute', right: width * -0.060, top: 0, bottom: 0, width: 2, backgroundColor: ColorPalette.thirdLight }} />
                                )}

                              
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: height * 0.0001,
        backgroundColor: '#252830ee',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
      
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 1,
    },
});

export default TabBar;
