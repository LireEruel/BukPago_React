import axios from 'axios';
import Member from '../models/Member';

export default async function requestLogin(email, pw) {
    return await axios
        .post('api/login', { email: email, password: pw })
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        });
}

export async function requestSignUp(member) {
    return await axios
        .post('/api/member/', {
            id: member.id,
            pw: member.pw,
            nickname: member.nickname,
            email: member.email,
        })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => {
            return err;
        });
}

export async function requestGetRanker() {
    return await axios
        .get('/api/rank')
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        });
}
