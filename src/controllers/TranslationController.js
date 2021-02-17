import axios from 'axios'

export default async function requestTranslate(northText) {
    var data = null;
    return await axios.get(
        '/api/translator',{params : {northText : northText}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            data = res.data.result
            return data
        }
    })
    return data;
}