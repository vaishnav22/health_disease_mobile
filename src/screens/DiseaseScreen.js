import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const DiseaseScreen = () => {
    return (
        <View style={styles.text}>
            <Text>Hello and welcome to Disease Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 60,
        marginVertical: 100
    }
})
export default DiseaseScreen;