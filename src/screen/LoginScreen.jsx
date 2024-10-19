import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { colors } from '../utils/colors';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const handleBackPress = () => navigation.goBack();
  const handleSignup = () => navigation.navigate("SIGNUP");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleBackPress}>
        <Ionicons name={"arrow-back-circle-outline"} color={colors.primary} size={45}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back!</Text>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name='mail-outline' size={25} color={colors.secondary} />
          <TextInput 
            style={styles.textInput} 
            placeholder="yourname@example.com" 
            keyboardType="email-address"  
            autoCapitalize="none" 
            placeholderTextColor={colors.secondary}
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name='lock' size={25} color={colors.secondary} />
          <TextInput 
            style={styles.textInput} 
            placeholder="Enter your password here!" 
            secureTextEntry={secureEntry} 
            onChangeText={setPassword} 
            placeholderTextColor={colors.secondary}
          />
          <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
            <SimpleLineIcons name='eye' size={20} color={colors.secondary} style={{ padding: 10 }} />
          </TouchableOpacity>
        </View>
        
        {/* Updated View for Forgot Password */}
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require("../assets/Google.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButtonWrapper: {
    marginVertical: 25,
    padding: 10,
  },
  textContainer: {
    margin: 15,
  },
  headingText: {
    fontSize: 45,
    color: colors.primary,
  },
  formContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    width: 340,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    padding:10,
    gap:10,

  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  forgotPasswordContainer: {
    width: '80%',
    alignItems: 'flex-end', 
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: colors.primary,
    // marginVertical: 10,
    fontSize:16,

  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
    width: 340,
    height:50,

  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 15,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width:340,
    gap:10,

  },
  googleImage: {
    height: 30,
    width: 30,
  },
  googleText: {
    fontSize: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
    gap:10,

  },
  accountText: {
    color: colors.primary,
    fontSize:15,
  },
  signupText: {
    color: colors.primary,
    fontSize:15,
  },
});
