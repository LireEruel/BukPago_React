import axios from 'axios';
import Train from '../models/Train';

export  async function requestTransLike(_isLike, _NK, _SK) {
    return await axios
        .post(
            '/api/evaluation/',
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

export default async function requestGetTestCase() {
    return await axios
        .get('/api/evaluation/', { withCredentials: true })
        .catch((error) => {
            return error;
        })
        .then((result)=> {return result});
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
