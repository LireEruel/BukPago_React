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

export async function requestTranslike(_isLike, _inputText, _outputText) {
    return await axios.post(
        '/api/evaluation', {params : {isLike : _isLike, inputText: _inputText, outputText : _outputText}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        return res.data
    })
}

export async function requestGetTestCase() {
    return await axios.post(
        'api/evaluation',
    ).catch(error => {return error}).then(res => {
        return res.data
    })
}

export async function requestTransOffer(_inputText,_outputText) {
    return await axios.post(
        'api/evaluation'
    ).catch(error => {return error}).then(res => {
        return res.data
    })
}