import axios from 'axios';
import Member from '../models/Member';

export default async function requestLogin(_id, _pw) {
    return await axios
        .post('/api/member/login', { id: _id, pw: _pw })
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
        .get('/api/evaluation/rank')
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        });
}

export async function requestGetUserInfo() {
    return await axios
        .get('/api/member/user')
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        })
}

export async function requestGetMyRank() {
    return await axios
        .get('/api/member/user/rank')
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        })
}

export async function requestUpdateUser(id,name,email) {
    const member = new Member(id,"",name,email);

    return await axios
        .put('/api/member/user',{member : member})
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        })
}

export async function requsetGetKey() {

    return await axios.get('/api/bukpagoAPI/',)
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        })
}

export async function requsetUpdateKey() {
    return await axios
        .put('/api/bukpagoAPI')
        .catch((error) => {
            return error;
        })
        .then((res) => {
            return res;
        })
}

