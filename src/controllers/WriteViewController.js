import axios from 'axios';

export default async function requestWrite() {
    return await axios.post(
        'api/write', {title : titleText,content : contentText},
    ).catch(error => {return error}).then(res => {return res})
}