import axios from 'axios';

const getScore = async () => {
    const res = await axios.get('/api/score');
    return res.data;
};

export { getScore };
