import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Spacer = () => {
    return (
        <View style={styles.spacer}>
        </View>
    )
}

const styles = StyleSheet.create({
    spacer: {
        marginVertical: 30
    }
})
export default Spacer;