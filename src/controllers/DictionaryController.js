import axios from 'axios';
import Dictionary from '../models/Dictionary';

export default async function requestGetDictionary() {
    return await axios
        .get('/api/dictionary/search', { withCredentials: true })
        .catch((error) => {
            console.warn(error);
            return [];
        })
        .then((result) => {
            var data = [];
            if (result.data != null) {
                var tmp = result.data.result;
                Object.keys(tmp).map((key, index) =>
                    data.push(
                        new Dictionary(tmp[key]['NK'], tmp[key]['SK'], tmp[key]['mean']).get_dic(),
                    ),
                );
                return data;
            }
            return [];
        });
}

export async function requestSearchDictionary(_code, _query) {
    console.log('이야냠랑머아ㅓㄻㅇㄴ;');
    console.log(_code, _query);
    return await axios
        .get(
            '/api/dictionary/search',
            { params: { code: _code, query: _query } },
            { withCredentials: true },
        )
        .catch((error) => {
            console.warn(error);
            return [];
        })
        .then((result) => {
            var data = [];
            if (result.data != null) {
                var tmp = result.data.result;
                Object.keys(tmp).map((key, index) =>
                    data.push(
                        new Dictionary(tmp[key]['NK'], tmp[key]['SK'], tmp[key]['mean']).get_dic(),
                    ),
                );
                return data;
            }
            return [];
        });
}
