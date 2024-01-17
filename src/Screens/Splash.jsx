import { View, Text, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { myColors } from '../Utils/MyColors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Splash = () => {
    const nav = useNavigation()

    useEffect(() => {
     setTimeout(() => {
        nav.replace('Login')
     }, 4000);
    }, []);


    return (
        <View style = {{ backgroundColor: myColors.primary,flex:1,justifyContent:'center'}}>
            <StatusBar style='light'/>
           <View style= {{ alignItems:"center",justifyContent:"center", gap: 4 }}>
           <Image style={{ tintColor:'white', height: 100, width: 100 }} source={require('../assets/logo.png')} />
        
        <View>
            <Text style={{ fontSize: 45 , color:myColors.secondary, font: "bold", letterSpacing: 1 }}> MBRAILLE </Text>
            <Text style = {{ color:myColors.secondary, fontSize: 17, textAlign: 'center', letterSpacing: 2, top: -8 }}> Online Braille Transcription </Text>

        </View>

        <View>

            
            <LottieView style = {{ width: 200, height: 200 }} source={require('../lottie/welcome animation.json')} autoPlay loop /> 
            <Text style = {{ color:myColors.secondary, fontSize: 10, textAlign: 'center', letterSpacing: 2, top: 10, }}> Getting Started... </Text>

        </View>

        <View style = {{ paddingTop: 10 }}>

        <ActivityIndicator/>

        </View>


        </View>
        </View>
    )
}

export default Splash
