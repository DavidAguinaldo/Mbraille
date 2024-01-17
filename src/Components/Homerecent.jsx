import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MyColors, myColors } from "./../Utils/MyColors"
import { ScrollView } from "react-native-web";

const Homerecent = ({title}) => {
  return (

    <View
      style={ styles.RecentContainer } >

      <Text style = {{fontSize: 17, fontWeight: '800', paddingTop: 10, paddingLeft: 7  }}>Your Recent Transcription History</Text>
      <Text style = {{ fontSize: 13, color: myColors.primary, paddingTop: 10, paddingRight: 10 }}>See All</Text>  






    </View>



  );
};

export default Homerecent;

const styles = StyleSheet.create({
  RecentContainer:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  }
})
