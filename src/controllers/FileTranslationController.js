import axios from 'axios'

export default async function requestFileTranslate(_FILES) {
    return await axios.post('/api/translator/file',
        {
            params: { files: _FILES },
            withCredentials: true
        }
    ).catch(error => { return error }).then(res => {
        return res;
    })
}