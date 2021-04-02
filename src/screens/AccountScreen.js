import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const AccountScreen = () => {
    return (
        <View style={styles.text}>
            <Text>Hello and welcome to Account Screen</Text>
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