import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import AccountScreen from './src/screens/AccountScreen'
import DiseaseScreen from './src/screens/DiseaseScreen'
import NewsScreen from './src/screens/NewsScreen'

const switchNavigator = createSwitchNavigator({
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

export default createAppContainer(switchNavigator)