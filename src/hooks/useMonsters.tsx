import axios from 'axios';
import { API_KEY } from '../utils/constants';

export const useMonsters = async (challengeRating: number) => {
    const response = await axios.get(
        `https://ddeg-api.cyclic.cloud/api/monsters`,
        {
            headers: { 'x-api-key': API_KEY },
            params: { challenge_rating: challengeRating },
        },
    );
    if (response.status === 200) {
        return response.data;
    } else {
        return null;
    }
};

export default useMonsters;
