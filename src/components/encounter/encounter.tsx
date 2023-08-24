import EncounterForm, { EncounterFormData } from '../encounter_form/encounter_form';
import EncounterSuggestions from '../encounter_suggestions/encounter_suggestions';
import { useState } from 'react';
import { useChallengeRating } from '../../hooks/useChallengeRating';

export const Encounter: React.FC = () => {
    const [encounterError, setEncounterError] = useState<string | null>(null);
    const [challengeRating, setChallengeRating] = useState<number | null>(null);

    const getSuggestedMonters = async (data: EncounterFormData) => {
        
        setChallengeRating(await useChallengeRating(data));

        if (challengeRating === null) {
            setEncounterError('Unable to determine challenge rating.');
            return;
        }
    };

    return (
        <>
            <EncounterForm onSubmission={getSuggestedMonters} />
            {encounterError && <p className='text-red-950'>{encounterError}</p>}
            {challengeRating && <EncounterSuggestions challengeRating={challengeRating} />}
        </>
    );
};

export default Encounter;
