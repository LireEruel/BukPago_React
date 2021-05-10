import axios from 'axios';
import Member from '../models/Member';

export default async function requestLogin(_id, _pw) {
    return await axios
        .post('/api/login', { id: _id, pw: _pw })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
}

export async function requestSignUp(member) {
    return await axios
        .post('/api/signUp', {
            id: member.id,
            pw: member.pw,
            name: member.name,
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
