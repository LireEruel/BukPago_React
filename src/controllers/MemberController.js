import axios from 'axios';
import Member from '../models/Members'

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
    return await axios.post(
        '/api/freeboard/',
        {id : member.id, pw : member.pw, nickname : member.nickname}
    ).then(res => {console.log(res); return res}).catch(err => {return err})
}
