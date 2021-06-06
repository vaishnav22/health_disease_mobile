import React,{useContext, useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FormButton from '../components/FormButton'
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font'

import { Context as AuthContext} from '../context/AuthContext'

const AccountScreen = ({navigation}) => {

    const {signout} = useContext(AuthContext)
  
    return (
        <View style={styles.text}>
            <Text>Hello and welcome to Account Screen</Text>
            <FormButton
            buttonTitle="Sign Out"
            onPress={signout}
          />
        </View>
    )
}
AccountScreen['navigationOptions'] = screenProps => ({
    title: 'Profile',
    tabBarIcon: <FontAwesome name="user" size={24} color="skyblue" />,
})

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 50,
        marginVertical: 100
    },
    
})

export default AccountScreen;