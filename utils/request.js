import axios from 'axios'

const post = async (url, param) => {
    const res = await axios(
        {
            method: "POST",
            url,
            data: param,
            "Content-Type": "application/json"
        }
    )
    return res.data;
}

export default post