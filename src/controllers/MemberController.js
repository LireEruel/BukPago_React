import axios from 'axios';
import Member from '../models/Member';

export default async function requestLogin(_id, _pw) {
    return await axios
        .post('/api/member/login', { id: _id, password: _pw })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
}

export async function requestSignUp(id, pw, name, email) {
    return await axios
        .post('/api/member/signUp', {
            pw: pw,
            id: id,
            name: name,
            email: email,
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
}

export async function requestGetRanker() {
    return await axios
        .get('/api/member/rank')
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        });
}
