import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native'
import React from 'react'

const Transcription = () => {
  return (
    <SafeAreaView style={ styles.transcriptionContainer }>
      <Text>Transcription Screen</Text>
    </SafeAreaView>
  )
}

export default Transcription;

const styles = StyleSheet.create({
    transcriptionContainer: {
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "center",
    }
});