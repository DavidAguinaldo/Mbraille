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

  const selectDoc = async () => {
    const formData = new FormData();
    try {
      await ImagePicker.getMediaLibraryPermissionsAsync();
      const video = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos
      });
      const videouri = video.assets[0].uri

      formData.append('video', {
        uri: video,
        type: "video",
        name: "VideoUp"
      });

      const config = {
        headers: {
          "Content-Type" : "multipart/form-data",
        },
        tranformRequest: () => {
          return formData;
        }
      };
      
      const response = await axios.post("http://localhost:8000/transcribe", formData, config);

      const data = await response.json();

      console.log(data);

      console.log(doc.assets[0]);


    } catch (error) {
      if({})
        console.log("User Cancelled the upload", error);
      else
        console.log(error)
    }
  }

  return (
    <SafeAreaView style={ styles.transcriptionContainer}>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity
            onPress={() => {} }
            style={styles.button}
        >
            <Text style={styles.buttonText}>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={selectDoc}
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