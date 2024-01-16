import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>MBraille</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Welcome to the MBraille app, where we empower users to convert multimedia
          into Braille seamlessly. Our mission is to enhance accessibility for individuals
          with visual impairments by providing a user-friendly and efficient transcription tool.
        </Text>

        <Text style={styles.sectionHeader}>Key Features</Text>
        <Text style={styles.feature}>- Text to Braille conversion</Text>
        <Text style={styles.feature}>- Easy-to-use interface</Text>
        <Text style={styles.feature}>- Multiple modes of input</Text>

        <Text style={styles.sectionHeader}>You can reach us at!</Text>
        <Text style={styles.contactInfo}>
          Address: Aurora Blvd, Quezon City
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1073FF', // Set background color
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  appName: {
    fontSize: 28, // Increase font size
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white', // Set font color to white
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 18, // Increase font size
    marginBottom: 20,
    color: 'white', // Set font color to white
  },
  sectionHeader: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set font color to white
  },
  feature: {
    fontSize: 18, // Increase font size
    marginLeft: 20,
    marginBottom: 10,
    color: 'white', // Set font color to white
  },
  contactInfo: {
    fontSize: 18, // Increase font size
    marginLeft: 20,
    color: 'white', // Set font color to white
  },
});

export default About;
