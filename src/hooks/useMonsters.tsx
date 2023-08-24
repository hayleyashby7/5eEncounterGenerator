import axios from 'axios';
import { API_KEY } from '../utils/constants';

export const useMonsters = async (challengeRating?: number | null) => {

    const params = challengeRating ? { challenge_rating: challengeRating } : {};

    const response = await axios.get(
        `https://ddeg-api.cyclic.cloud/api/monsters`,
        {
            headers: { 'x-api-key': API_KEY },
            params: params,
        },
    );
    if (response.status === 200) {
        return response.data;
    } else {
        return null;
    }
};

export default useMonsters;
