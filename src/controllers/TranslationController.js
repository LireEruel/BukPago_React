import axios from 'axios'
import Translate from '../models/Translate'

export default async function requestTranslate(_northText) {
    return await axios.get(
        '/api/translator',{params : {northText : _northText}}, {withCredentials : true}
    ).catch(error => {return error}).then(res => {
        if(res.data != null){
            return res.data.result
        }
    })
}

export async function requestGetDictionary( _query) {
    return await axios.get(
        `/api/member/manage/`, { params: { query: _query } },
        { withCredentials: true }
    ).catch(error => { console.warn(error); return [] }).then(result => {
        var data = [];
        if (result.data != null) {
            var tmp = result.data
            Object.keys(tmp).map((key, index) => (
                data.push((new Translate(tmp[key]['north'], tmp[key]['south']
                    , tmp[key]['mean']
                )).get_dic())
            ))
            return data
        }
        return []
    });
}