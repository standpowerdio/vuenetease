import axios from '../router/axios'

function getdata({url,params={}}) {
    return axios.get(url, {
        params
    })
}


export {getdata}