import React from 'react';
import Lottie from 'lottie-react-native';

const Loader = () => {
    return (
        <Lottie source={require('../../assets/lottie/loading.json')} autoPlay loop />
    );
};

export default Loader;