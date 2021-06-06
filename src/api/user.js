import axios from 'axios'

export default axios.create({
    baseURL: 'https://health-disease-user-auth-2.herokuapp.com/'
})