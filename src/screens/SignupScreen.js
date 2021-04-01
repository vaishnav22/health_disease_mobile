import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Context as AuthContext} from '../context/AuthContext'
import {Font} from 'expo'

import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {

    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../../assets/user.png')} style={styles.logo} />
          <Text style={styles.text}>Create your account</Text>
    
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
    
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />
    
          <FormButton
            buttonTitle="Sign Up"
            onPress={() => signup({email, password})}
          />
    
        <Spacer />
          {/* <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity> */}
    
          {/* {Platform.OS === 'android' ? (
            <View> */}
              {/* <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                
              /> */}
    
              {/* <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
              /> */}
            {/* </View>
          ) : null} */}
    
          <TouchableOpacity
            style={styles.forgotButton} 
            onPress={() => navigation.navigate('Signin')}
            >
            <Text style={styles.navButtonText}>
              Aldredy have an account? Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 120,
      width: 120,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginVertical: 13,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
});

export default SignupScreen;