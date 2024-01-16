import { StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    Platform, 
    SafeAreaView,
    TouchableOpacity, 
    Alert } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';



const Transcription = () => {
  const navigation = useNavigation();

  const selectImage = async () => {
    try {
      await ImagePicker.getMediaLibraryPermissionsAsync();
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log(image.assets);
    } catch (error) {
      if (error.message.includes('User cancelled the picker')) {
        console.log("User Cancelled the upload");
      } else {
        console.error(error);
      }
    }
  };

  const selectVid = async () => {
    const formData = new FormData();
    const apiURL = "http://192.168.0.2:8000/transcribe"; //API dapat to. Hoping I could fix this part and after

    try {
      await ImagePicker.getMediaLibraryPermissionsAsync();
      const video = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      });
      const videodata = video.assets[0];

      formData.append('file', videodata);
      
      console.log(videodata);

      const config = {
        headers: {
          "Content-Type" : "multipart/form-data",
        },
        transformRequest: () => formData,
      };

      const response = await axios.post(apiURL, formData, config);

      console.log("Response:", response);

      if (response.status === 200) {
        console.log("Success:", response.data);
      } else {
        console.error("Error Status:", response.status);
        console.error("Error Data:", response.data);
      }

    } catch (error) {
      if (error.message.includes('User cancelled the picker')) {
        console.log("User Cancelled the upload");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <SafeAreaView style={ styles.transcriptionContainer}>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity
            onPress={selectImage}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={selectVid}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Transcription;

const styles = StyleSheet.create({
  transcriptionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    
  },
  button: {
      backgroundColor: myColors.primary,
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 5,
  },
  buttonOutline: {
      borderColor: myColors.primary,
      borderWidth: 2,
      backgroundColor: "white",
      
  },
  buttonText:{
      color: "white",
      fontWeight: "700",
      fontSize: 16
  },
  buttonOutlineText: {
      color: myColors.primary,
      fontWeight: "700",
      fontSize: 16
  },
});