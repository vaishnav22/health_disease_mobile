import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../../utils/Dimentions'

const FormInput = ({ labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View tyle={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#666" />
            </View>
            <TextInput 
                style={styles.input}
                value={labelValue}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#ccc',
        borderRadius: 18,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif-medium'
    },
    iconStyle: {
        padding: 15,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor:'#ccc',
        borderWidth: 1,
        width: 50,
        marginHorizontal: 20
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        fontFamily: 'sans-serif-medium'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 20,
        borderWidth: 1,
        fontFamily: 'sans-serif-medium'
    }
})

export default FormInput;