import axios from 'axios'

export default async function requestTranslate(_NK) {
    return await axios.get(
        '/api/translator',{params : {NK : _NK}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            return res.data.result
        }
    })
}

