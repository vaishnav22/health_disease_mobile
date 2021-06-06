import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from './createDataContext'
import userAPI from '../api/user'
// import diseaseAPI from '../api/user'
import { navigate } from '../navigationRef'
import axios from "axios";

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
        case 'prediction':
            return {...state, prediction: action.payload}
        case 'signout':
            return {token: null, errorMessage:''}
        case 'user_data':
            return {...state,errorMessage:'',user_data: action.payload}
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
            dispatch({
                type: 'loading',
                payload: 'Please wait creating your account!'
            })
            const response = await userAPI.post('/signup',{email,password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({
                type: 'signin',
                payload: response.data.token
            })
            navigate('mainFlow')
            console.log(response.data)
            dispatch({
                type: 'loading',
                payload: null
            })
        } catch(e){
            dispatch({type: 'add_error', payload: 'Email aldredy in use'})
        }
    }
}

const signin = (dispatch) => {
    return async ({email,password}) => {
        try{
            dispatch({
                type: 'loading',
                payload: 'Please wait creating your account!'
            })
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

const tryLocalSignin = dispath => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        dispath({type: 'signin',payload: token})
        navigate('mainFlow')
    } else{
        navigate('loginFlow')
    }
}
const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('loginFlow')
}

const predict = (dispatch) => {
    return async(symptom1, symptom2, symptom3, symptom4,symptom5) => {
        try{
            dispatch({
                type: 'loading',
                payload: 'Please wait creating your account!'
            })
            console.log("getting data")
            if(symptom1 && symptom2 && symptom3 && symptom4 && symptom5){
                let input = [symptom1, symptom2, symptom3, symptom4,symptom5]

                const response = await axios.post('https://health-desease-prediction.herokuapp.com/predict', {"input": input},{
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                dispatch({
                    type: "prediction",
                    payload: response.data.Disease
                })
                dispatch({
                    type: "loading",
                    payload: null
                })
                console.log(response.data.Disease)
            } else {
                dispatch({type: 'add_error', payload: 'All symptoms are mandatory!'})
            }
            
        }
        catch(e){
            console.log(e)
        }
    }
}

const get_user = dispath => async () => {
    const token = await AsyncStorage.getItem('token')
    console.log('token',token)
    const response = await userAPI.get('/get_data?token='+token)
    dispath({type: 'user_data',payload: response.data.user.email})
    console.log(response.data)
}
export const { Context, Provider} = createDataContext(
    authReducer,
    {signin,signout,signup,predict,tryLocalSignin,get_user},
    {token: null, errorMessage: '',loading: ''}
)