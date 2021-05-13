import axios from 'axios'

export default axios.create({
    baseURL: 'https://health-disease-user-auth.herokuapp.com'
})