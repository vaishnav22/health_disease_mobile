import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from './createDataContext'
import userAPI from '../api/user'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        // case 'signup':
        //     return {errorMessage: '', token: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'loading':
            return {...state, loading: action.payload}
        case 'clear_error_message':
            return {...state,errorMessage: ''}
        default:
            return state
    }
}

const clearErrorMessage = dispatch = () => {
    dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) => {
    return async ({email,password}) => {
        try{
            const response = await userAPI.post('/signup',{email,password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({
                type: 'loading',
                payload: 'Please wait creating your account!'
            })
            dispatch({
                type: 'signin',
                payload: response.data.token
            })
            navigate('mainFlow')
            console.log(response.data)
        } catch(e){
            dispatch({type: 'add_error', payload: 'Email aldredy in use'})
        }
    }
}

const signin = (dispatch) => {
    return async ({email,password}) => {
        try{
            console.log('hello');
            const response = await userAPI.post('/signin',{email,password})
            console.log(response.data)
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({
                type: 'signin',
                payload: response.data.token
            })
            navigate('mainFlow')
        } catch(e){
            console.log(e)
            dispatch({type: 'add_error', payload: 'Please try again'})
        }
    }
}

const signout = (dispatch) => {
    return ({}) => {

    }
}

export const { Context, Provider} = createDataContext(
    authReducer,
    {signin,signout,signup},
    {token: null, errorMessage: '',loading: ''}
)