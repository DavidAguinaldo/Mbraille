import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Homeicon from '../Components/Homeicon'
import Homesearch from '../Components/Homesearch'
import Homebanner from '../Components/Homebanner'
import Homerecent from '../Components/Homerecent'
import Homehistory from '../Components/Homehistory'
 
const Home = ()=>  {
  return (


      <View>


        <Homeicon/>
        <Homesearch/>
        <Homebanner/>
        <Homerecent />
        <Homehistory />

      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  containerHome:{
    paddingHorizontal:20,
    paddingTop: 10, 
    flex: 1, 
    backgroundColor: "white", 
    gap: 20,

  }
})
