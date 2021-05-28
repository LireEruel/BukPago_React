import axios from 'axios'

export default async function requestFileTranslate(_FILES) {
    return await axios.get('/api/file-translator',
        {
            paramsSerializer: () => { return JSON.stringify(_FILES); },
            withCredentials: true
        }
    ).catch(error => { return error }).then(res => {
        return res;
    })
}