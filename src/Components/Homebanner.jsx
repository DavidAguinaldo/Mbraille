import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { myColors } from '../Utils/MyColors'
import LottieView from 'lottie-react-native';

const Homebanner = () => {
  return (
    <View style = {{ paddingTop: 15, alignItems: 'center' }}>
       <LottieView style = {{ width: 100, height: 100 }} source={require('../lottie/SignIn.json')} autoPlay loop /> 
       <Text style = {{ fontSize: 20, fontWeight: "bold", paddingBottom: 15}} > Welcome User</Text>
    </View>
  )
}

export default Homebanner