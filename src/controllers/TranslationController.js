import axios from 'axios'


export default async function requestTranslate(northText) {
    return await axios.post(
        '/api/transrate',{northText : northText}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {return res.status})
}