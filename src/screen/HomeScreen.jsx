import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const YogaImage = require('../assets/Yoga.png'); 
const ManImage = require('../assets/relaxation.png');

const HomeScreen = () => {
  const navigation = useNavigation();
const handleLogin = () => {
  navigation.navigate("LOGIN");
};
  return (
    <View style={styles.container}>
      <Image source={YogaImage} style={styles.image1} />
      <Image source={ManImage} style={styles.image2} /> 
      <Text style={styles.title}>
      Soul Spectrum Diary
      </Text>
      <Text style={styles.subTittle}>
      A personal space to explore, reflect, and express the full range of your emotions daily...
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButtonWrapper}
        onPress={handleLogin}>
            <Text  style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButtonWrapper}>
            <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image1: {
    width: 50,
    height: 70,
    resizeMode: 'contain',
    marginVertical:10,
  },
  image2: {
    height: 350,
    width: 350,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 52,
    textAlign: 'center',
    color: colors.primary,
    // fontFamily: fonts.Bold, 
    marginTop: 10,
  },
  subTittle: {
    // fontFamily: fonts.Medium,
    fontSize: 22,
    paddingHorizontal: 18,
    color: colors.scondary,
    textAlign: 'center',
    // paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection:"row",
    marginTop: 18,
    borderWidth: 3,
    borderColor: colors.primary,
    width: "85%",
    height: 65,
    borderRadius: 50,
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    justifyContent:'center',
    alignItems: 'center',
    width: "50%",
    borderRadius: 100,
    fontSize: 22,
  },
  loginButtonText:{
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 23,
  },
  signupButtonText:{
    fontSize: 23,
  },
  signupButtonWrapper:{
    justifyContent:'center',
    alignItems: 'center',
    width: "50%",
    borderRadius: 100,
    fontSize: 22,
  }
});