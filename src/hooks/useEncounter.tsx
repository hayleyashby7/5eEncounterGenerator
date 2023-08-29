import { EncounterFormData, GeneratedEncounter} from '../types/encounter.types';
import axios from 'axios';
import { API_KEY } from '../utils/constants';

export const useEncounter = async (data: EncounterFormData)=> {
    const response: GeneratedEncounter = await axios
        .post(`https://ddeg-api.cyclic.cloud/api/encounter`, data, {
            headers: { 'x-api-key': API_KEY },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error.response.data.message);
            return null;
        });
    
    return response?.monsters.length === 0 ? null : response;
};

export default useEncounter;
