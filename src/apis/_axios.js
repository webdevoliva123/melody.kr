import axios from 'axios';
// const user_token = localStorage.getItem('t&tUsertoken')


const melodyapi = axios.create({baseURL : `${process.env.NEXT_PUBLIC_SEVER_BASE_URI}`});

melodyapi.interceptors.request.use((req) => {
    
        const userToken = localStorage.getItem('melodyToken');
        if(userToken){
            req.headers = {
                'Authorization': `Bearer ${userToken}`,
                // 'Content-Type':'multipart/form-data'
            }
        }
    

    return req;
})

export default melodyapi;