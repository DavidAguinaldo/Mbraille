import { StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    Platform, 
    SafeAreaView,
    TouchableOpacity } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/MyColors';

const Transcription = () => {
  return (
    <SafeAreaView style={ styles.transcriptionContainer }>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity
            onPress={() => {} }
            style={styles.button}
        >
            <Text style={styles.buttonText}>Audio/Video</Text>
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
      alignItems: "center"
  },
  buttonOutline: {
      borderColor: myColors.primary,
      borderWidth: 2,
      backgroundColor: "white",
      marginTop: 5,
      
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