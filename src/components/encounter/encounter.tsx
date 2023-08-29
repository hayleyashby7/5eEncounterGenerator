import  useEncounter from '../../hooks/useEncounter';
import { GeneratedEncounter, EncounterFormData } from '../../types/encounter.types';
import EncounterForm from '../encounter_form/encounter_form';
import EncounterSuggestions from '../encounter_suggestions/encounter_suggestions';
import { useState } from 'react';

export const Encounter: React.FC = () => {
    const [encounterError, setEncounterError] = useState<string | null>(null);
    const [encounter, setEncounter] = useState<GeneratedEncounter | null>(null);

    const getEncounter = async (data: EncounterFormData) => {
        
        setEncounter(await useEncounter(data));

        if (encounter === null) {
            setEncounterError('No encounter generated.');
            return;
        }
    };

    return (
        <>
            <EncounterForm onSubmission={getEncounter} />
            {encounterError && <p className='text-red-950'>{encounterError}</p>}
            {encounter && <EncounterSuggestions encounter={encounter} />}
        </>
    );
};

export default Encounter;
