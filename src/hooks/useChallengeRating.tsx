import { EncounterFormData } from '../components/encounter_form/encounter_form';
import axios from 'axios';
import { API_KEY } from '../utils/constants';

export const useChallengeRating = async (data: EncounterFormData) => {
    const response = await axios
        .post(`https://ddeg-api.cyclic.cloud/api/challenge_rating`, data, {
            headers: { 'x-api-key': API_KEY },
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });

    return response ? response.data : null;
};
