import axios from 'axios'

export default async function requestFileTranslate(_FILES) {
    return await axios.post('/api/translator/file',
        {
            params: { files: _FILES },
            withCredentials: true
        }
    ).then((res) => {
        if (res.status === 200) {
            if (Object.keys(res.data).length !== 0) {
                return res;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }).catch(error => { return error })
}