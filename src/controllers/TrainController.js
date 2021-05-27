import axios from 'axios';
import Train from '../models/Train';

export default async function requestTranslike(_isLike, _NK, _SK) {
    return await axios
        .post(
            '/api/evaluation/translate/eval',
            { params: {NK: _NK, SK: _SK , isGood: _isLike, } },
            { withCredentials: true },
        )
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res.data;
        });
}

export async function requestGetTestCase() {
    return await axios
        .get('api/evaluation/', { withCredentials: true })
        .catch((error) => {
            return error;
        })
        .then((result) => {
            var data = [];
            if (result.data != null) {
                // 5-2
                var tmp = result.data;
                Object.keys(tmp).map((key, index) =>
                    data.push(new Train(tmp[key]['NK'], tmp[key]['SK'])),
                );
                return data;
            }
            return [];
        });
}

export async function requestTransOffer(_NK, _SK,) {
    return await axios
        .post('api/evaluation/translate/suggestion', { params: { NK: _NK, SK: _SK } }, { withCredentials: true })
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res.data;
        });
}
