import axios from 'axios'



const ProdApi = process.env.NEXT_PUBLIC_API_RENDER

const api = axios.create({
    baseURL: ProdApi
})

export default api