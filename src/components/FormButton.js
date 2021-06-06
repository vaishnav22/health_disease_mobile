import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {windowHeight, windowWidth} from '../../utils/Dimentions'
import * as Font from 'expo-font'

const FormButton = ({buttonTitle, ...rest}) => {

    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText} >{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    }
})

export default FormButton;