import axios from 'axios'
import Dictionary from '../models/Dictionary'

export default async function requestGetDictionary( _query) {
    return await axios.get(
        `/api/dictionary`, { params: { query: _query } },
        { withCredentials: true }
    ).catch(error => { console.warn(error); return [] }).then(result => {
        var data = [];
        if (result.data != null) {
            var tmp = result.data.result
            Object.keys(tmp).map((key, index) => (
                data.push((new Dictionary(tmp[key]['north'], tmp[key]['south']
                    , tmp[key]['mean']
                )).get_dic())
            ))
            return data
        }
        return []
    });
}