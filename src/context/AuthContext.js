import createDataContext from './createDataContext'
import diseaseAPI from '../api/disease'

const authReducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({email,password}) => {
        try{
            const response = await diseaseAPI.post('/signup',{email,password})
            console.log(response.data)
        } catch(e){
            console.log(e.message);
        }
    }
}

const signin = (dispatch) => {
    return ({}) => {

    }
}

const signout = (dispatch) => {
    return ({}) => {

    }
}

export const { Context, Provider} = createDataContext(
    authReducer,
    {signin,signout,signup},
    {isSignedIn: false}
)