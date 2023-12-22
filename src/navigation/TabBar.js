import React, { useState } from 'react';
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
import Icon from '../components/shared/Icons';
import { Text } from 'native-base';
import { ColorPalette, colors } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const TabBar = ({ state, descriptors, navigation }) => {
    const [fab, setFab] = useState(false);

    const handlePlusPress = () => {
        // handle plus press logic
    };

    const handleMinusPress = () => {
        // handle minus press logic
    };

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
                    { name: 'opencart', type: 'Fontisto', color: isFocused ? colors.secondary: '#A0A0A0', size: 19 },
                    {
                        name: isFocused && fab ? 'chevron-up' : isFocused ? 'x' : fab ? 'chevron-up' : 'plus',
                        type: 'Feather',
                        color: isFocused ?colors.secondary : '#ffffff',
                        size: 25,
                    },
                    { name: 'heart', type: 'Octicons', color: isFocused ? colors.secondary : '#A0A0A0', size: 25 },
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

                    if (index === 2) {
                        setFab((fab) => !fab);
                    } else {
                        setFab(false);
                    }
                };

                return (
                    <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label === 'notes' ? 4 : 0 }]}>
                        <Pressable
                            onPress={onPress}
                            style={{
                                backgroundColor: isFocused ? colors.primaryDark : colors.primaryLight,
                                borderRadius: index === 2 ? 30 : 25,
                                borderWidth: index === 2 ? 2 : 0,
                                borderColor: '#ffffff',
                                padding: index === 2 ? -10 : 0,
                                position: 'relative',
                            }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15, flexDirection: 'row' }}>
                                <Icon {...iconList[index]} />
                                {index === 3 && (
                                    <View style={{ position: 'absolute', right: width * -0.033, top: 0, bottom: 0, width: 2, backgroundColor: ColorPalette.thirdLight }} />
                                )}

                                {index === 2 &&
                                    fab && (
                                        <View style={{ flexDirection: 'row', position: 'absolute', right: width * -0.075, top: height * -0.075, bottom: 0, zIndex: 1 }}>
                                            <View marginRight={20}>
                                                <Pressable onPress={() => handlePlusPress()}>
                                                    <View backgroundColor="#D6B3B6" borderRadius={50} padding={5}>
                                                        <Icon name="plus-circle-outline" type="MaterialCommunityIcons" size={30} color="#ffffff" />
                                                    </View>
                                                </Pressable>
                                            </View>
                                            <View marginLeft={20}>
                                                <Pressable onPress={() => handleMinusPress()}>
                                                    <View backgroundColor="#D6B3B6" borderRadius={50} padding={5}>
                                                        <Icon name="minus-circle-outline" type="MaterialCommunityIcons" size={30} color="#ffffff" />
                                                    </View>
                                                </Pressable>
                                            </View>
                                        </View>
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
