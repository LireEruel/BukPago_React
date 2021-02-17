import axios from 'axios'

export default async function requestTranslate(northText) {
    return await axios.get(
        '/api/translator',{params : {northText : northText}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            return res.data.result
        }
    })
}

async function requestGetDictionary(query) {
    return await axios.get(
        '/api/divtionary',{params : {query : query}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            return res.data.result
        }
    })
}