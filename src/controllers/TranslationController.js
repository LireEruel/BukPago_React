import axios from 'axios'

export default async function requestTranslate(_northText) {
    return await axios.get(
        '/api/translator',{params : {northText : _northText}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            return res.data.result
        }
    })
}
