import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '593cb67b0ecb4aa1bda93e62934c100d',
    }
})