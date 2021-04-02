import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const NewsScreen = () => {
    return (
        <View style={styles.text}>
            <Text>Hello and welcome to News Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 50,
        marginVertical: 100
    }
})

export default NewsScreen;