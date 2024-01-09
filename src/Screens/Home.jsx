import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Homeicon from '../Components/Homeicon'
import Homesearch from '../Components/Homesearch'
import Homebanner from '../Components/Homebanner'
import Homerecent from '../Components/Homerecent'
 
const Home = ()=>  {
  return (
    <SafeAreaView style = {{ paddingHorizontal:20, paddingTop: 10, flex: 1, backgroundColor: "white", gap: 20 }}>
        <Homeicon/>
        <Homesearch/>
        <Homebanner />
        <Homerecent title='Recent Transcription' />
        
        
    </SafeAreaView>
  )
}

export default Home
