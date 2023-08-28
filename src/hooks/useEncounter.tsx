import { EncounterFormData } from '../components/encounter_form/encounter_form';
import axios from 'axios';
import { API_KEY } from '../utils/constants';

export const useEncounter = async (data: EncounterFormData) => {
    const response = await axios
        .post(`https://ddeg-api.cyclic.cloud/api/encounter`, data, {
            headers: { 'x-api-key': API_KEY },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error);
        });
    
    return response ? response : null;
};

export default useEncounter;
