import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';

const Homeicon = () => {
  return (

    <KeyboardAvoidingView
        behavior="padding" 
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} 
        style={{  }}>
          

    <View style = {{ alignItems: "center", backgroundColor: "#2f4f4f", borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}>
    <LottieView style = {{ width: 200, height: 175 }} source={require('../lottie/Home.json')} autoPlay loop /> 
    </View>

    </KeyboardAvoidingView>
  );
};

export default Homeicon