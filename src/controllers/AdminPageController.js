import axios from "axios"

export default async function requestEvaluationLog() {
    return await axios.get('/api/evaluation/record')
        .then((res) => {
            if (res.status === 200) {
                return res;
            }
        })
        .catch((err) => {
            return err;
        })
}