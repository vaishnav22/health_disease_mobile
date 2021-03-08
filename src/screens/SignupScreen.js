import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SignupScreen = ({navigation}) => {
    return (
        <View>
            <Text>Hello and welcome to signup Screen</Text>
            <Button title="mainFlow"  onPress={() => navigation.navigate('mainFlow')} />
        </View>
    )
}

export default SignupScreen;