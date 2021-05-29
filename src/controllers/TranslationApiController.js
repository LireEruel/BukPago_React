import axios from 'axios'

export default async function requestApiKey(_NAME, _PURPOSE) {
    return await axios.post('/api/bukpagoAPI/',
        {
            params: { name: _NAME, purpose: _PURPOSE },
            withCredentials: true
        }
    ).catch(err => { return err }).then(res => {
        console.log(res);
        return res;
    })
}