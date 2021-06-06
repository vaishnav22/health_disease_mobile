import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import AccountScreen from './src/screens/AccountScreen'
import DiseaseScreen from './src/screens/DiseaseScreen'
import NewsScreen from './src/screens/NewsScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

import {Provider as AuthProvider } from './src/context/AuthContext'
import {setNavigator} from './src/navigationRef'


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }), 
  mainFlow: createBottomTabNavigator({
    Disease: DiseaseScreen,
    News: NewsScreen,
    Account: AccountScreen
  })
})

const App =  createAppContainer(switchNavigator)


export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </AuthProvider>
  )
}