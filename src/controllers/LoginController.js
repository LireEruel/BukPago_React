import axios from 'axios';

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
