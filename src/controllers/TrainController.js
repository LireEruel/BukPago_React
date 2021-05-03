import axios from 'axios'

export default async function requestTranslike(_isLike, _inputText, _outputText) {
    return await axios.post(
        '/api/evaluation', {params : {isLike : _isLike, inputText: _inputText, outputText : _outputText}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        return res.data
    })
}

export async function requestGetTestCase() {
    return await axios.post(
        'api/evaluation',
    )
}

export async function requestTransOffer(_inputText,_outputText) {
    return await axios.post(
        'api/evaluation'
    )
}