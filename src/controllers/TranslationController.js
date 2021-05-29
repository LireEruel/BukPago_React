import axios from 'axios'

export default async function requestTranslate(_NK, _code) {
    return await axios.get(
        '/api/translator',{ params: { NK: _NK, code: _code } }, { withCredentials: true }
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            return res.data.result
        }
    })
}

export async function requestGetApiKey(name, perpose)
{
    return await axios.post(
        '/api/bukpagoAPI/',{name : name, perpose : perpose} 
    ).catch(error => {return error}).then(res => {
        console.log(res);
        return res
    })
}
