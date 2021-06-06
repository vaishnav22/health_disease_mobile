import React,{useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FormButton from '../components/FormButton'

import { Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () => {
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

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 50,
        marginVertical: 100
    }
})

export default AccountScreen;